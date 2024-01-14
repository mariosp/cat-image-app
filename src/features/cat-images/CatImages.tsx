import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchCatsAction } from "../../store/actions/cats";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Loader } from "../../components/loader/Loader";
import { CardTile } from "../../components/card-tile/CardTile";
import { CatModal } from "./cat-modal/CatModal";

export const CatImages = ()=> {
    const dispatch = useAppDispatch();
    const {cats, isLoading} = useAppSelector(state=> state.cats);

    useEffect(()=>{
        console.log("CREATE COMPONENT CAT");
        !cats.length && dispatch(fetchCatsAction());
    }, []);

    const renderCardItems = () => cats.map(({id, url})=> <CardTile key={id} id={id} imageUrl={url}/>)

    return(
        <Box justifyContent={'center'} alignItems={'center'} h="100%">
            {isLoading && !cats.length && <Loader/>}
            {cats.length && 
                <Flex direction='row' justifyContent='center' alignItems='flex-start' wrap='wrap' flexBasis="33.333333%">
                    {renderCardItems()}
                </Flex>
            }
            <CatModal />
        </Box>
    )
};

export default CatImages;