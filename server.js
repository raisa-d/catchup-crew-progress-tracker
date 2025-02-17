import express from 'express';
const app = express();
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import homeRouter from './routes/homeRoutes.js';
import updateRouter from './routes/updateRoutes.js';
import assignmentRouter from './routes/assignmentRoutes.js';
import classRouter from './routes/classRoutes.js';
import loginRouter from './routes/loginRoutes.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* =======
MIDDLEWARE
======= */
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======
ROUTERS
======= */
app.use('/', loginRouter);
app.use('/home', homeRouter);
app.use('/update', updateRouter);
app.use('/assignments', assignmentRouter);
app.use('/classes', classRouter);

/* =======
START SERVER
======= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});