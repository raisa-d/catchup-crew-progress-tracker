import express from 'express';
import { updateStatus, updateDate } from '../controllers/updateControllers.js';
const updateRouter = express.Router();

updateRouter.post('/completed', updateStatus);
updateRouter.post('/class-date/:classId', updateDate);

export default updateRouter;