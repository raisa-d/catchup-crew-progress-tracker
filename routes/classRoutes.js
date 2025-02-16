import express from 'express';
import { getClasses } from '../controllers/classController.js';
const classRouter = express.Router();

classRouter.get('/', getClasses);

export default classRouter;