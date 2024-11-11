import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');

    return JSON.parse(contacts) || [];
  } catch (error) {
    console.log(error);
  }
};
