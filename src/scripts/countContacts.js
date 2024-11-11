import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsCount = await readContacts();
    const count = contactsCount.length;
    return count;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
