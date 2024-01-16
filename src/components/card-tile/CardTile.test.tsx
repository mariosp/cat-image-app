import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { CardTile } from './CardTile';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it("Should show text when text property is set", () => {
    render(<BrowserRouter><CardTile text="text test" imageUrl='/test' id="test" path="cats"/></BrowserRouter>);

    const element = screen.getByText('text test');

    expect(element).toBeTruthy();
});

it("Should show text when text property is set", () => {
    render(<BrowserRouter><CardTile text="text test" imageUrl='/test' id="test" path="cats"/></BrowserRouter>);

    fireEvent.click(screen.getByText('text test'));

    expect(window.location.pathname).toBe("/cats/test");
});

it("Should show cross button when onCrosshandler is present", () => {
    render(<BrowserRouter><CardTile text="text test" imageUrl='/test' id="test" path="cats" onCrosshandler={()=> {}} /></BrowserRouter>);

    const button = screen.getByLabelText('Remove favorite');

    expect(button).toBeDefined();
});