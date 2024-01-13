import { CATS_API } from "../config/api";


export const getRandomCats = () => {
    return fetch(CATS_API + `/v1/images/search?limit=10`).then(res=> res.json());
}