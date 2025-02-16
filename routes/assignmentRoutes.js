import express from 'express';
import { getAssignments } from '../controllers/assignmentController.js';
const assignmentRouter = express.Router();

assignmentRouter.get('/', getAssignments);

export default assignmentRouter;