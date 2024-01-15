import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";
import { CardTile } from "../../components/card-tile/CardTile";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CatModal } from "../cat-images/cat-modal/CatModal";
import { StarIcon } from "@chakra-ui/icons";


export const Favorites = ()=> {
    const dispatch = useAppDispatch();
    const { cats } = useAppSelector(state=> state.favorites);

    useEffect(()=>{
        console.log("FAVORITE COMPONENT");
    }, []);

    const renderCardItems = () => cats.map(({id, url})=> (
        <Link to={`/favorites/${id}`} key={id}>
            <CardTile imageUrl={url}/>
        </Link>
    ));

    return(
        <Box justifyContent={'center'} alignItems={'center'} h="100%">
            {cats.length ?
                <Flex direction='row' flexDirection="column" justifyContent='center' alignItems='flex-start' wrap='wrap' flexBasis="33.333333%">
                    {renderCardItems()}
                </Flex> 
                :
                <Flex h="100%" direction='row' justifyContent='center' alignItems='center' wrap='wrap' flexBasis="33.333333%">
                    <StarIcon color="tertiary.300" boxSize="10" />
                    <Text color="tertiary.500">Your favorite list is empty</Text>
                </Flex> 
            }
            <CatModal actionFrom="favorites" />
        </Box>
    )
};

export default Favorites;