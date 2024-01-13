import { CATS_FAIL, CATS_LOADING, CATS_SUCCESS, Cat, CatsDispatchTypes } from "../actions/cats";

export interface CatState {
    isLoading: boolean;
    cats: Cat[],
    error: boolean,
  }

const initState: CatState = {
    isLoading: false,
    cats: [],
    error: false,
};

export const catsReducer = (state: CatState = initState, action: CatsDispatchTypes): CatState=> {
    switch (action.type) {
        case CATS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: false,
            }
        case CATS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                cats: [...state.cats, ...action.data],
            }
        case CATS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}