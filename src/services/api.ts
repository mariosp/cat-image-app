import { CATS_API } from "../config/api";


export const getRandomCats = () => {
    return fetch(CATS_API + `/v1/images/search?limit=10`,{
        headers: {
            'x-api-key': 'live_9TTWA5cDL60nA8Y2OeqbLaN2pH5b1l3sgIGTi0WRBempWXZeIHkDRrHEULB1mwmq',
        }
    }).then(res=> res.json());
}

export const getCatById = (catId: string) =>{
    return fetch(CATS_API + `/v1/images/${catId}`,{
        headers: {
            'x-api-key': 'live_9TTWA5cDL60nA8Y2OeqbLaN2pH5b1l3sgIGTi0WRBempWXZeIHkDRrHEULB1mwmq',
        }
    }).then(res=> res.json());
}