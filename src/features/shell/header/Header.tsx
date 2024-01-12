import { Tab, TabList } from '@chakra-ui/react';
import './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = ()=> {

    return(
        <TabList height={[20, 16]}>
            <Tab as={Link} to="/cats">Cats</Tab>
            <Tab as={Link} to="/breeds">Breeds</Tab>
            <Tab>Favorite</Tab>
        </TabList>
    )
};