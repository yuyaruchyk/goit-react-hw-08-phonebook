import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterReducer';
import { contactsReducer } from './contacts/contactListReducer';

export const store = configureStore({
  reducer: {
    contactList: contactsReducer,
    filter: filterReducer,
  },
});
