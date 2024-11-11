import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  const contacts = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.writeFile(PATH_DB, contacts, 'utf8');
  } catch (error) {
    console.log(error);
  }
};
