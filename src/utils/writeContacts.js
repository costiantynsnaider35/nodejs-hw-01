import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, data, 'utf8');

    console.log('Contacts have been written to the file successfully.');
  } catch (error) {
    console.error('Failed to write contacts to the file:', error);
  }
};
