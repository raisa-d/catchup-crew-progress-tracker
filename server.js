import express from 'express';
const app = express();
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client, Databases } from 'appwrite';
import homeRouter from './routes/homeRoutes.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serve static files
app.use(express.static('public'));

/* ===============
CONNECT TO APPWRITE
=============== */
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);

/* =======
ROUTERS
======= */
app.use('/', homeRouter)

/* =======
START SERVER
======= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export { databases };