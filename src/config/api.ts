export const CATS_API = "https://api.thecatapi.com";

export const CATS_API_ENDPOINTS = {
    IMAGES: "v1/images",
    IMAGES_SEARCH: "v1/images/search",
    BREEDS: "v1/breeds",
} as const; 

export const catsHeader = new Headers({
    'x-api-key': 'live_9TTWA5cDL60nA8Y2OeqbLaN2pH5b1l3sgIGTi0WRBempWXZeIHkDRrHEULB1mwmq',
});