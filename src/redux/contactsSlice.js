import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNewContact: (state, action) => {
      return [action.payload, ...state];
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contacts = contactsSlice.reducer;
