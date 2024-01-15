import { Box, Card, CardBody, Image, Tag } from "@chakra-ui/react";
import { Loader } from "../loader/Loader";
import { Link } from "react-router-dom";

export interface CardTileProps {
    imageUrl: string,
    text?: string;
    tileSize?: "big" | "small";
    id: string;
    path: "cats" | "breeds" | "favorites";
}

export const CardTile = ({imageUrl, text, tileSize = "big", id, path }: CardTileProps) => {
    const sizeWH = tileSize === "big" ? ["10rem", "15rem"] : ["5rem", "5rem"];
    const marginSize = tileSize === "big" ? [5, 10] : [2, 3];

    return (
        <Card w={sizeWH} h={sizeWH} m={marginSize} bg="primary.300">
            <CardBody w="inherit" h="inherit" m="0" p="0">
                <Link to={`/${path}/${id}`}>
                    <Image 
                        h="100%" 
                        w="100%"
                        objectFit='cover'
                        src={imageUrl}
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
        </Card>
    )
}