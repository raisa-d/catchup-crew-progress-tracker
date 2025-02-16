import express from 'express';
import { getIndex, getAssignments, getClasses } from '../controllers/homeControllers.js';
const homeRouter = express.Router();

homeRouter.get('/', getIndex);
homeRouter.get('/assignments', getAssignments);
homeRouter.get('/classes', getClasses);

export default homeRouter;