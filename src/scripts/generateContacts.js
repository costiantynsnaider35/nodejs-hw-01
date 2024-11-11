import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const allContacts = await readContacts();

    const newContact = [];
    for (let i = 0; i < number; i++) {
      newContact.push(createFakeContact());
    }

    const updatedContacts = [...allContacts, ...newContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
