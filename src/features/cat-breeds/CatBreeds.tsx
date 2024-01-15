import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBreedsAction } from "../../store/actions/breeds";
import { CardTile } from "../../components/card-tile/CardTile";
import { Box, Flex } from "@chakra-ui/react";
import { Loader } from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { BreedModal } from "./breed-modal/BreedModal";

export const CatBreeds = ()=> {
    const dispatch = useAppDispatch();
    const {breeds, isLoading} = useAppSelector(state=> state.breeds);

    useEffect(()=>{
        console.log("CREATE BREEDS COMPONENT");
        !breeds.length && dispatch(fetchBreedsAction());
    }, []);
    
    const renderCardItems = () => breeds.map(({id, image, name}) =>(
        <Link to={`/breeds/${id}`} key={id}>
            <CardTile imageUrl={image?.url} text={name}/>
        </Link>
    ));

    return(
        <Box justifyContent={'center'} alignItems={'center'} h="100%">
            {isLoading && !breeds.length && <Loader/>}
            {breeds.length && 
                <Flex direction='row' justifyContent='center' alignItems='flex-start' wrap='wrap' flexBasis="33.333333%">
                    {renderCardItems()}
                </Flex>  
            }
            <BreedModal />
        </Box>
    )
};

export default CatBreeds;