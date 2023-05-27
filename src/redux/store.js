import { configureStore } from '@reduxjs/toolkit';
import { filterValue } from './filterSlice';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterValue,
  },
});
export const persistor = persistStore(store);
