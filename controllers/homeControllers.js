import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

async function getIndex(req, res) {
    const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
    const classes = await read(process.env.CLASSES_COLLECTION_ID);

    res.render('index', {
        assignments,
        classes
    });
};

export { getIndex };