import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

export async function getAssignments(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
    
        res.render('assignments', {
            assignments
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
};