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