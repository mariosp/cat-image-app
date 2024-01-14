import { Card, CardBody, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Loader } from "../loader/Loader";

export interface CardTileProps {
    imageUrl: string,
    id: string,
}

export const CardTile = ({imageUrl, id}: CardTileProps) => {
    return (
        <Link to={`/cats/${id}`}>
            <Card w={['10rem', '15rem']} h={['10rem', '15rem']} m={[5, 10]} bg="primary.300">
                <CardBody w="inherit" h="inherit" m="0" p="0">
                    <Image 
                        h="100%" 
                        w="100%"
                        objectFit='fill'
                        src={imageUrl}
                        borderRadius="5"
                        fallback={<Loader/>}
                    />
                </CardBody>
            </Card>
        </Link>
    )
}