import express from 'express';
import { getHome } from '../controllers/homeControllers.js';

const homeRouter = express.Router();

homeRouter.get('/', getHome);

export default homeRouter;