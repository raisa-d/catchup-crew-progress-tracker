import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

export async function getClasses(req, res) {
    try {
        const allClasses = await read(process.env.CLASSES_COLLECTION_ID);
    
        res.render('classes', {
            classes: allClasses
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
};