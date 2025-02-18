import dotenv from 'dotenv';
import { Query, Client, Databases } from 'appwrite';

dotenv.config();

/* ===============
CONNECT TO APPWRITE
=============== */
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);

/* ===============
DATABASE FUNCTIONS
=============== */
// READ ITEMS FROM COLLECTION
export async function read(collection_id) {
  try {
    // page1
    let page1 = await databases.listDocuments(
      process.env.DATABASE_ID,
      collection_id,
      [
        Query.limit(100),
        Query.offset(0)
      ]
    );

    const lastId = page1.documents[page1.documents.length - 1].$id;

    // page2
    let page2 = await databases.listDocuments(
      process.env.DATABASE_ID,
      collection_id,
      [
        Query.limit(100),
        Query.cursorAfter(lastId)
      ]
    );

    const allClasses = [page1.documents, page2.documents].flat();
    return allClasses;
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

// *** check this function
export async function isRollover(documentId, boolean) {
  try {
    const response = await databases.updateDocument(
        process.env.DATABASE_ID,
        process.env.ASSIGNMENTS_COLLECTION_ID,
        documentId,
        { 'is-rollover': boolean }
    );
    return response;
} catch (err) {
    console.error(`Error updating rollover status: ${err}`);
    throw err;
};
};