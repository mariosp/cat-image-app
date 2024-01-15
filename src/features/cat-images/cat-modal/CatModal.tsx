import { Box, Image, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, Tag, TagLabel, TagRightIcon, IconButton, Tooltip, useClipboard, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCatById } from "../../../services/api";
import { Cat } from "../../../store/actions/cats";
import { Loader } from "../../../components/loader/Loader";
import { InfoIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addFavorite, removeFavorite } from "../../../store/actions/favorites";

export interface CatModalType {
    actionFrom: "cats" | "favorites",
}

export const CatModal = ({ actionFrom }: CatModalType) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    let { catId } = useParams();
    const navigate = useNavigate();
    const { onCopy, value, setValue } = useClipboard("");
    
    const dispatch = useAppDispatch();
    const favoriteCats = useAppSelector(state=> state.favorites.cats);
    const [cat, setCat] = useState<Cat | null>();
    const [isLoading, setLoading] = useState(false);

    const isFavorite = !!favoriteCats.find(favCat=> favCat.id === cat?.id);

    useEffect(()=> {
        if(catId) {
            setLoading(true);
            fetchCat(catId);
            onOpen();
        } else {
            onClose();
        }
    }, [catId]);

    useEffect(()=>{
        if(value) {
            onCopy();
            toast({
                title: 'Copied!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
    }, [value]);

    const fetchCat = async (catId: string) => {
        try{
            const catData = await getCatById(catId);
            setCat(catData);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    const handleOnClose = ()=>{
        setCat(null);
        navigate(`/${actionFrom}`);
    }

    const handleOnCopyUrlClick = ()=> {
        setValue(`${window.location.host}/cats/${cat?.id}`);
    }

    const handleAddToFav = ()=> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        isFavorite ? dispatch(removeFavorite(cat.id)) : dispatch(addFavorite(cat));
    }

    const renderCatDetails = ()=> {
        let breedName: string | null = null;
        let breedId: string | null = null;
        if(cat?.breeds?.length) {
            breedName = cat.breeds[0]?.name;
            breedId = cat?.breeds[0]?.id;
        }

    return(
        <Box h="100%">
            <ModalCloseButton bg="secondary.100" />
            <Image 
                src={cat?.url}
                h="100%"
                w="100%"
                objectFit="cover"
                borderRadius="5"
            />
            <Box bottom="0" right="0" position="absolute" h="20%" w="100%" borderRadius="5" display="flex" justifyContent="flex-end" alignItems="center">
                { breedId &&
                    <Link to={`/breeds/${breedId}`}>
                        <Tag size="lg" variant='solid' bg="primary.500" mr="2">
                                <TagLabel>{breedName}</TagLabel>
                                <TagRightIcon as={InfoIcon} />
                        </Tag>
                    </Link> 
                }

            <Tooltip label='Copy url'>
                <IconButton
                    onClick={handleOnCopyUrlClick}
                    mr="2"
                    bg="primary.500"
                    icon={<LinkIcon />} 
                    aria-label="url button"                
                />
            </Tooltip>

            <Tooltip label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
                <IconButton
                    onClick={handleAddToFav}
                    mr="2"
                    bg="primary.500"
                    color={isFavorite ? "yellow": "white"}
                    icon={<StarIcon />}
                    aria-label="favorites button"
                />
            </Tooltip>  
            </Box>
        </Box>)
    }

    return(
        <Modal onClose={handleOnClose} isOpen={isOpen} isCentered allowPinchZoom>
        <ModalOverlay/>
        <ModalContent h="96" m={[5, null]} borderRadius="5" bg="secondary.100">
            {isLoading && <Loader></Loader>}
            {cat && renderCatDetails()}
        </ModalContent>
      </Modal>
    )
}