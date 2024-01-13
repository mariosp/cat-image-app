import { Dispatch } from "redux";
import { getRandomCats } from "../../services/api";

export const CATS_LOADING = 'CATS_LOADING';
export const CATS_SUCCESS = 'CATS_SUCCESS';
export const CATS_FAIL = 'CATS_FAIL';

export interface Cat {
    id: string,
    url: string,
    width: number,
    height: number,
    breeds: string[],
}

export interface CatsSuccess {
    type: typeof CATS_SUCCESS;
    data: Cat[],
}

export interface CatsFail {
    type: typeof CATS_FAIL;
}

export interface CatsLoading {
    type: typeof CATS_LOADING;
}

export type CatsDispatchTypes = CatsSuccess | CatsFail | CatsLoading;
   

export const fetchCatsAction = ()=> {
    return fetchCatsActionMiddleware();
}

export const catsLoading = (): CatsLoading => ({
    type: CATS_LOADING,
});

export const catsSuccess = (catImages: Cat[]): CatsSuccess => ({
    type: CATS_SUCCESS,
    data: catImages
});

export const catsFail = (): CatsFail => ({
    type: CATS_FAIL,
});


const fetchCatsActionMiddleware = () => {
    return async (dispatch: Dispatch<CatsDispatchTypes>) => {
        dispatch(catsLoading());

        try {
          const catImages = await getRandomCats();
          dispatch(catsSuccess(catImages));
        } catch (err) {
          dispatch(catsFail());
        }
    }
}