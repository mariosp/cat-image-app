import { Box, Card, CardBody, Image, Tag } from "@chakra-ui/react";
import { Loader } from "../loader/Loader";

export interface CardTileProps {
    imageUrl: string,
    text?: string;
}

export const CardTile = ({imageUrl, text}: CardTileProps) => {

    return (
        <Card w={['10rem', '15rem']} h={['10rem', '15rem']} m={[5, 10]} bg="primary.300">
            <CardBody w="inherit" h="inherit" m="0" p="0">
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
            </CardBody>
        </Card>
    )
}