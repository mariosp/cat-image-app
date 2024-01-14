import { BREEDS_FAIL, BREEDS_LOADING, BREEDS_SUCCESS, Breed, BreedsDispatchTypes } from "../actions/breeds";

export interface BreedState {
    isLoading: boolean;
    breeds: Breed[],
    error: boolean,
  }

const initState: BreedState = {
    isLoading: false,
    breeds: [],
    error: false,
};

export const breedsReducer = (state: BreedState = initState, action: BreedsDispatchTypes): BreedState => {
    switch (action.type) {
        case BREEDS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: false,
            }
        case BREEDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                breeds: [...state.breeds, ...action.data],
            }
        case BREEDS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}