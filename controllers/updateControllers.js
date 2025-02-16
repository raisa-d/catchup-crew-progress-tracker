import dotenv from 'dotenv';
import { updateCompleted, updateClassDate } from '../models/appwriteModel.js';
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

export async function updateDate(req, res) {
  const classId = req.params.classId;
  const newDate = req.body['date-watched'];
  try {
    const response = await updateClassDate(classId, newDate);
    res.redirect('/');
  } catch(err) {
    console.error('Error updating class date:', err);
    res.status(500).send('Internal Server Error');
  };
};