import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authSlice';
import { contactsApi } from './phonebook/contactsSlice';

import { filterSlice } from './phonebook/filterSlice';

const rootPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
  auth: persistReducer(rootPersistConfig, authSlice.reducer),
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
