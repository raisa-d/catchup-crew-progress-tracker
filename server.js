import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client, Databases } from "appwrite";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* =======
MIDDLEWARE
======= */
// Serve static files
app.use(express.static('public'));

/* ===============
CONNECT TO APPWRITE
=============== */
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);

/* ===============
APPWRITE CRUD FUNCTIONALITY
=============== */
// READ ITEMS FROM COLLECTION
async function read(collection_id, collection) {
    try {
      let response = await databases.listDocuments(
        process.env.DATABASE_ID,
        collection_id
      );
      return response.documents;
    } catch(err) {
      console.error(err);
    };
  };

/* =======
ROUTES
======= */
app.get('/', async (req, res) => {
    const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID, 'assignments');
    const classes = await read(process.env.CLASSES_COLLECTION_ID, 'classes');

    res.render('index', {
        assignments,
        classes
    });
});

/* =======
START SERVER
======= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});