import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

export async function getAssignments(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
        assignments.sort((a, b) => {
            const aCompleted = a['completed'] === 'true';
            const bCompleted = b['completed'] === 'true';
            return aCompleted - bCompleted;
        })
    
        res.render('assignments', {
            assignments
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
};