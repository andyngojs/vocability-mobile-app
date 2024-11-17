import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/src/features/counter/counterSlice';

const rootReducers = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
