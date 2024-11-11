import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const lastContact = await readContacts();
    if (lastContact.length > 0) {
      lastContact.pop();
      await writeContacts(lastContact);
    } else {
      console.log('Contacts not found');
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
