import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carReducer } from './car/carSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cars'],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, carReducer);

export const store = configureStore({
  // persistReducer: (persistConfig, carReducer),
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
