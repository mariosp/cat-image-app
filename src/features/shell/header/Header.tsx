import { Box, Image, Tab, TabList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import catLogo from '../../../assets/cat-tongue-logo.png';

export const Header = ()=> {

    return(
        <TabList h={[20, 16]} bg='primary.300'>
            <Box position="absolute" zIndex="2" top="0" left="0" h='inherit' w='inherit'>
                <Image
                    h={['6rem', '5rem']}
                    src={catLogo}
                    alt='Cat logo'
                />
            </Box>
            <Tab as={Link} to="/cats">Cats</Tab>
            <Tab as={Link} to="/breeds">Breeds</Tab>
            <Tab as={Link} to="/favorites">Favorites</Tab>
        </TabList>
    )
};