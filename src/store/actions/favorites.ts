import { Cat } from "./cats";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export interface AddFavorite {
    type: typeof ADD_FAVORITE;
    data: Cat,
}

export interface RemoveFavorite {
    type: typeof REMOVE_FAVORITE;
    data: string;
}

export type FavoritesDispatchTypes = AddFavorite | RemoveFavorite;

export const addFavorite = (cat: Cat): AddFavorite => ({
    type: ADD_FAVORITE,
    data: cat,
});

export const removeFavorite = (id: string): RemoveFavorite => ({
    type: REMOVE_FAVORITE,
    data: id,
});