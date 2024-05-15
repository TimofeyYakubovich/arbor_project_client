import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux"; 
import thunkMiddleware from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const rootReducer = combineReducers(reducers)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  });

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch