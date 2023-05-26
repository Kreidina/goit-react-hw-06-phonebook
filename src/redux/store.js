import {
  configureStore,
  // createAction,
  // createReducer,
  // createSlice,
} from '@reduxjs/toolkit';
import { filterValue } from './filterSlice';
import { contacts } from './contactsSlice';
// import { reduser as rootReducer } from './reducer';

// export const addNewContact = createAction('contact/addNewContact');
// // console.log(addNewContact({ name: 'khjhkj', num: 'hgfgfhg' }));
// export const deleteContact = createAction('contact/deleteContact');
// export const filterChange = createAction('filter/filterChange');
// export const visibleContact = createAction('contact/visibleContact');

// const contactsReducer = createReducer([], {
//   [addNewContact]: (state, action) => {
//     return [action.payload, ...state];
//     // return state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// [visibleContact]: (state, action) => {
//   return state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(action.payload.toLowerCase())
//   );
// },
// });
// const visibleContact = createReducer('', {
//   [visibleContact]: (state, action) =>
//     state.contacts.name.toLowerCase().includes(action.payload.toLowerCase()),
// });

// const filterValueReducer = createReducer('', {
//   [filterChange]: (state, action) => {
//     return action.payload;
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contacts,
    filter: filterValue,
  },
});
