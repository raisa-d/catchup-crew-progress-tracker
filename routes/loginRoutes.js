import express from 'express';
import { getLogin } from '../controllers/loginControllers.js';
const loginRouter = express.Router();

loginRouter.get('/', getLogin);

export default loginRouter;