import express from 'express';
import { getIndex, getAllData } from '../controllers/homeControllers.js';
const homeRouter = express.Router();

homeRouter.get('/', getIndex);
homeRouter.get('/assignments', getAllData);

export default homeRouter;