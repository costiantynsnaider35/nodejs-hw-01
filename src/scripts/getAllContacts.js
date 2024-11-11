import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contactsAll = await readContacts();
    return contactsAll;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
