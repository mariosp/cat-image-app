import { Card, CardBody, Image } from "@chakra-ui/react";

export interface CardTileProps {
    imageUrl: string,
}

export const CardTile = ({imageUrl}: CardTileProps) => {
    
    return (
        <Card w={['10rem', '15rem']} h={['10rem', '15rem']} m={[5, 10]}>
            <CardBody w="inherit" h="inherit" m="0" p="0">
                <Image h="100%" w="100%" objectFit='fill' src={imageUrl}/>
            </CardBody>
        </Card>
    )
}