import dotenv from 'dotenv';
import { updateCompleted } from '../models/appwriteModel.js';
dotenv.config();

export async function updateStatus(req, res) {
    const { documentId, status } = req.body;
    try {
    const response = await updateCompleted(documentId, status);

    return res.status(200).json({ message: 'Document updated successfully', response });
    } catch (err) {
      console.error('Error updating completed status in updateControllers:', err);
      res.status(500).send('Internal Server Error');
    }
};