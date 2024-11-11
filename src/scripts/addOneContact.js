import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const allContacts = await readContacts();
    const newContact = createFakeContact();
    const updateContacts = [...allContacts, newContact];
    await writeContacts(updateContacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
