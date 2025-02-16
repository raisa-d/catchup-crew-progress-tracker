import express from 'express';
import { updateStatus } from '../controllers/updateControllers.js';
const updateRouter = express.Router();

updateRouter.post('/completed', updateStatus);

export default updateRouter;