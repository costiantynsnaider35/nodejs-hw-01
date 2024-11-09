import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export async function readContacts() {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(contacts);
}
