import { Box, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tag, TagLabel, useDisclosure, Text, Link as LinkChakra, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCatsByBreedId } from "../../../services/api";
import { Cat } from "../../../store/actions/cats";
import { Loader } from "../../../components/loader/Loader";
import { Breed } from "../../../store/actions/breeds";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CardTile } from "../../../components/card-tile/CardTile";


export const BreedModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let { breedId } = useParams();
    const navigate = useNavigate();
    const [cats, setCats] = useState<Cat[] | null>(null);
    const [isLoading, setLoading] = useState(false);

    let breedDetails: Breed | null = null;

    if(cats?.length && cats[0]?.breeds?.length) {
        breedDetails = { ...cats[0].breeds[0] }
    }

    useEffect(()=> {
        if(breedId) {
            setLoading(true);
            fetchCatsByBreedId(breedId);
            onOpen();
        } else {
            onClose();
        }
    }, [breedId]);

    const fetchCatsByBreedId = async (breedId: string) => {
        try{
            const catData = await getCatsByBreedId(breedId);
            setCats(catData);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    const handleOnClose = ()=>{
        setCats(null);
        navigate('/breeds');
    }

    const renderBreedInfo = (breedDetails: Breed) => {
        const details = [
            ["Life span", breedDetails?.life_span],
            ["Origin", breedDetails?.origin],
            ["Weight", breedDetails?.weight?.metric]
        ];
        
        return (
            <Box h="auto" display="flex" flexWrap="wrap" justifyContent="center">
                { details.map(detail=>(
                    <Tag
                        m="1"
                        size='md'
                        key={detail[1]}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='tertiary'
                    >
                        <TagLabel>{detail[0]}: {detail[1]}</TagLabel>
                    </Tag>
                ))}
                <Divider mt="1" mb="1" colorScheme="tertiary" />
                <Box textAlign="center" h="20" maxH="20" overflow="scroll">
                    {breedDetails?.wikipedia_url && 
                        <LinkChakra href={breedDetails.wikipedia_url} isExternal>
                        Wiki <ExternalLinkIcon mx='2px' />
                        </LinkChakra>
                    }
                    <Text color="tertiary.800" textAlign="center">
                        {breedDetails?.description}
                    </Text>
                </Box>
                <Divider mt="1" mb="1" colorScheme="tertiary" />
            </Box>
        )
    }

    const renderCardItems = (cats: Cat[]) => cats.map(({id, url})=> (
            <CardTile key={id} id={id} imageUrl={url} path="cats" tileSize="small"/>
    ));

    return(
        <Modal onClose={handleOnClose} isOpen={isOpen} isCentered allowPinchZoom>
            <ModalOverlay/>
            <ModalContent h="70%" m={[5, null]} borderRadius="5" bg="primary.300" display="flex">
                <ModalCloseButton bg="secondary.100" />
                {isLoading && <Loader></Loader>}
                {!isLoading && breedDetails &&
                    <>
                        <ModalHeader textAlign="center" color="tertiary.600">{breedDetails.name}</ModalHeader>
                        <ModalBody h="100%" overflow="scroll">
                        { renderBreedInfo(breedDetails) }
                        <Flex direction='row' justifyContent='center' alignItems='flex-start' wrap='wrap' flexBasis="33.333333%">
                            { cats?.length && renderCardItems(cats)}
                        </Flex>

                        </ModalBody>
                    </>    
                }
            </ModalContent>
        </Modal>
    )

}