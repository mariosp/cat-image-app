import { Reducer, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { catsReducer } from './reducers/cats';
import { breedsReducer } from './reducers/breeds';
import { FavoritesState, favoritesReducer } from './reducers/favorites';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const favoritesPersistConfig = {
    key: 'cats_app',
    storage,
    safelist: ['cats'],
}

export const store = configureStore({
    reducer: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cats: catsReducer,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        breeds: breedsReducer,
        favorites: persistReducer(favoritesPersistConfig, favoritesReducer) as unknown as Reducer<FavoritesState, UnknownAction, FavoritesState>,
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
   }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch