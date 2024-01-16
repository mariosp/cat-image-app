import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Header } from './Header';
import { Tabs } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it("Should render all tabs", () => {
    render(<BrowserRouter><Tabs><Header /></Tabs></BrowserRouter>);

    const element1 = screen.getByText('Cats');
    const element2 = screen.getByText('Breeds');
    const element3 = screen.getByText('Favorites');

    expect(element1).toBeTruthy();
    expect(element2).toBeTruthy();
    expect(element3).toBeTruthy();
});

it.each(['Cats', 'Breeds', 'Favorites'])('should navigate to %s route', (tabLabel)=>{
    render(<BrowserRouter><Tabs><Header /></Tabs></BrowserRouter>);

    fireEvent.click(screen.getByText(tabLabel));

    expect(window.location.pathname).toBe("/" + tabLabel.toLowerCase());
});