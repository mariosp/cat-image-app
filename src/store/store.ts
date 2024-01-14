import { configureStore } from '@reduxjs/toolkit';
import { catsReducer } from './reducers/cats';
import { breedsReducer } from './reducers/breeds';

export const store = configureStore({
    reducer: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cats: catsReducer,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        breeds: breedsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch