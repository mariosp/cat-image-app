import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CardTile } from "../../components/card-tile/CardTile";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CatModal } from "../cat-images/cat-modal/CatModal";
import { StarIcon } from "@chakra-ui/icons";
import { removeAllFavorites } from "../../store/actions/favorites";


export const Favorites = ()=> {
    const dispatch = useAppDispatch();
    const { cats } = useAppSelector(state=> state.favorites);

    const renderCardItems = () => cats.map(({id, url})=> (
            <CardTile key={id} id={id} imageUrl={url} path="favorites"/>
    ));

    const handleRemoveAll = ()=> {
        // @ts-ignore
        dispatch(removeAllFavorites())
    }

    return(
        <Box justifyContent={'center'} alignItems={'center'} h="100%">
            {cats.length ?
                <>
                <Box display="flex" pt="5" justifyContent="center" alignItems="center">
                    <Button
                        onClick={handleRemoveAll}
                        colorScheme='primary'
                        variant='outline'
                    >
                        Remove all favorites
                    </Button>
                </Box>
                <Flex direction='row' justifyContent='center' alignItems='flex-start' wrap='wrap' flexBasis="33.333333%">
                    {renderCardItems()}
                </Flex>
                </>
                :
                <Flex h="100%" direction="column" justifyContent='center' alignItems='center' wrap='wrap' flexBasis="33.333333%">
                    <StarIcon color="tertiary.300" boxSize="10" />
                    <Text color="tertiary.500">Your favorites list is empty</Text>
                </Flex> 
            }
            <CatModal actionFrom="favorites" />
        </Box>
    )
};

export default Favorites;