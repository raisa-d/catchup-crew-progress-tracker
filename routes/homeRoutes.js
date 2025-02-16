import express from 'express';
import { getIndex } from '../controllers/homeControllers.js';
const homeRouter = express.Router();

homeRouter.get('/', getIndex);

export default homeRouter;