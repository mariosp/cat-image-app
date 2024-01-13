import { configureStore } from '@reduxjs/toolkit';
import { catsReducer } from './reducers/cats';

export const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch