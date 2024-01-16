import { Box, Card, CardBody, IconButton, Image, Tag } from "@chakra-ui/react";
import { Loader } from "../loader/Loader";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png";
import { CloseIcon } from "@chakra-ui/icons";

export interface CardTileProps {
    imageUrl: string,
    text?: string;
    tileSize?: "big" | "small";
    id: string;
    path: "cats" | "breeds" | "favorites";
    onCrosshandler?: ()=> void 
}

export const CardTile = ({imageUrl, text, tileSize = "big", id, path, onCrosshandler }: CardTileProps) => {
    const sizeWH = tileSize === "big" ? ["10rem", "15rem"] : ["5rem", "5rem"];
    const marginSize = tileSize === "big" ? [5, 10] : [2, 3];

    return (
        <Card data-testid="cardTile" w={sizeWH} h={sizeWH} m={marginSize} bg="primary.300">
            <CardBody w="inherit" h="inherit" m="0" p="0">
                <Link to={`/${path}/${id}`}>
                    <Image 
                        h="100%" 
                        w="100%"
                        objectFit={imageUrl? 'cover': 'contain'}
                        src={imageUrl || noImage}
                        borderRadius="5"
                        fallback={<Loader/>}
                    />
                    { text && 
                        <Box position="absolute" w="100%" h="20%" bottom="0" display="flex" justifyContent="center" alignItems="center">
                            <Tag size="l" variant='solid' colorScheme='primary' p="1">
                                {text}
                            </Tag>
                        </Box>
                    }
                </Link>
            </CardBody>
            {onCrosshandler && 
                <IconButton
                    position="absolute"
                    top="-3"
                    right="-3"
                    size='sm'
                    onClick={onCrosshandler}
                    isRound={true}
                    variant="outline"
                    colorScheme="tertiary"
                    bg="white"
                    aria-label='Remove favorite'
                    fontSize='15'
                    icon={<CloseIcon />}
                />
            }
        </Card>
    )
}