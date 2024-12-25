import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/src/features/counter/counterSlice';
import vocabManagementReducer from '@/src/features/vocab-management/vocabManagementSlice';

const rootReducers = combineReducers({
  counter: counterReducer,
  vocabManagement: vocabManagementReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
