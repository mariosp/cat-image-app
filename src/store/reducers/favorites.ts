import { Cat } from "../actions/cats";
import { ADD_FAVORITE, FavoritesDispatchTypes, REMOVE_ALL_FAVORITE, REMOVE_FAVORITE } from "../actions/favorites";

export interface FavoritesState {
    cats: Cat[],
  }

const initState: FavoritesState = {
    cats: [],
};

export const favoritesReducer = (state: FavoritesState = initState, action: FavoritesDispatchTypes): FavoritesState => {
    switch (action.type) {
        case ADD_FAVORITE:
            const catObject: Cat = {
                id: action.data.id,
                url: action.data.url,
            };
            return {
                ...state,
                cats: [...state.cats, catObject]
            }
        case REMOVE_FAVORITE:
            const afterRemoval = state.cats.filter(cat=> cat.id !== action.data);
            return {
                ...state,
                cats: afterRemoval,
            }
        case REMOVE_ALL_FAVORITE:
            return {
                ...state,
                cats: [],
            }
        default:
            return state;
    }
}