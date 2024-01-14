import { Dispatch } from "redux";
import { getBreeds } from "../../services/api";

export const BREEDS_LOADING = 'BREEDS_LOADING';
export const BREEDS_SUCCESS = 'BREEDS_SUCCESS';
export const BREEDS_FAIL = 'BREEDS_FAIL';

export interface Breed {
    id: string,
    description?: string;
    name: string;
    life_span?: string;
    origin?: string;
    weight: {imperial: string; metrics: string;}
    wikipedia_url?: string;
    image: {url: string};
}

export interface BreedsSuccess {
    type: typeof BREEDS_SUCCESS;
    data: Breed[],
}

export interface BreedsFail {
    type: typeof BREEDS_FAIL;
}

export interface BreedsLoading {
    type: typeof BREEDS_LOADING;
}

export type BreedsDispatchTypes = BreedsSuccess | BreedsFail | BreedsLoading;
   

export const fetchBreedsAction = ()=> {
    return fetchBreedsActionMiddleware();
}

export const BreedsLoading = (): BreedsLoading => ({
    type: BREEDS_LOADING,
});

export const BreedsSuccess = (breeds: Breed[]): BreedsSuccess => ({
    type: BREEDS_SUCCESS,
    data: breeds
});

export const BreedsFail = (): BreedsFail => ({
    type: BREEDS_FAIL,
});


const fetchBreedsActionMiddleware = () => {
    return async (dispatch: Dispatch<BreedsDispatchTypes>) => {
        dispatch(BreedsLoading());

        try {
          const breeds: Breed[] = await getBreeds();
          dispatch(BreedsSuccess(breeds));
        } catch (err) {
          dispatch(BreedsFail());
        }
    }
}