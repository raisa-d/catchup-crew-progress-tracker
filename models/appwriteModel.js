import dotenv from 'dotenv';
import { databases } from '../server.js';

dotenv.config();

// READ ITEMS FROM COLLECTION
export async function read(collection_id) {
    try {
      let response = await databases.listDocuments(
        process.env.DATABASE_ID,
        collection_id
      );
      return response.documents;
    } catch(err) {
      console.error(err);
    };
};

// TOGGLE ASSIGNMENTS COMPLETED
export async function updateCompleted(documentId, status) {
  try {
    console.log(`Updating document: ${documentId} with status: ${status}`);

      const response = await databases.updateDocument(
          process.env.DATABASE_ID,
          process.env.ASSIGNMENTS_COLLECTION_ID,
          documentId,
          { 'completed': status }
      );

      console.log('Document updated:', response);
      return response;
  } catch (err) {
      console.error(`Error updating completed status: ${err}`);
      throw err;
  };
};

export async function updateClassDate(documentId, newDate) {
  try {
      const response = await databases.updateDocument(
          process.env.DATABASE_ID,
          process.env.CLASSES_COLLECTION_ID,
          documentId,
          { 'date-watched': newDate }
      );
      return response;
  } catch (err) {
      console.error(`Error updating date: ${err}`);
      throw err;
  };
};