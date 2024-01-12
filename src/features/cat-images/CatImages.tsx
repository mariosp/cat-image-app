import { useEffect } from "react";

export const CatImages = ()=> {

    useEffect(()=>{
        console.log("CREATE COMPONENT CAT")
    }, [])

    return(
        <p>WORKING</p>
    )
};

export default CatImages;