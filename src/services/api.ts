import { CATS_API, CATS_API_ENDPOINTS, catsHeader } from "../config/api";
import { Breed } from "../store/actions/breeds";
import { Cat } from "../store/actions/cats";

export const getRandomCats = (limit: number = 10) => {
    return fetchCats({limit});
}

export const getCatsByBreedId = (breedId: string, limit?: number) =>{
    return fetchCats({limit, breedId});
}

export const getCatById = (catId: string): Promise<Cat> =>{
    const url = new URL(CATS_API);
    url.pathname = `${CATS_API_ENDPOINTS.IMAGES}/${catId}`;

    return fetch(url, {
        headers: catsHeader,
    }).then(res=> res.json());
}

export const getBreeds = (): Promise<Breed[]> => {
    const url = new URL(CATS_API);
    url.pathname = CATS_API_ENDPOINTS.BREEDS;

    return fetch(url, {
        headers: catsHeader,
    }).then(res=> res.json());
}

const fetchCats = ({limit, breedId}: { limit?: number; breedId?: string}): Promise<Cat[]> =>{
    const url = new URL(CATS_API);
    const params = new URLSearchParams({
        ...(limit ? { limit: limit.toString() } : {}),
        ...(breedId ? { breed_id: breedId } : {}),
    });
    
    url.pathname = `${CATS_API_ENDPOINTS.IMAGES_SEARCH}`;
    url.search = params.toString();

    return fetch(url, {
        headers: catsHeader,
    }
    ).then(res=> res.json());
}