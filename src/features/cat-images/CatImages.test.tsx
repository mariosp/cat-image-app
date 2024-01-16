import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CatImages from './CatImages';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import * as StoreHooks from "../../store/hooks";
import * as CatsActions from "../../store/actions/cats";

afterEach(cleanup);

describe("On mount", ()=> {
    it("Should dispatch action to fetch cats if length is falsy", () => {
        const fetchCatsActionSpy = jest.spyOn(CatsActions, 'fetchCatsAction');
        jest
        .spyOn(StoreHooks, 'useAppSelector')
        .mockImplementationOnce(() => ({cats: [], isLoading: true}));
    
        render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);
    
        expect(fetchCatsActionSpy).toHaveBeenCalled();
    });

    it("Should not dispatch action to fetch cats if length is truthy", () => {
        const fetchCatsActionSpy = jest.spyOn(CatsActions, 'fetchCatsAction');
        jest.spyOn(StoreHooks, 'useAppSelector')
        .mockImplementationOnce(() => ({cats: [{id: "1"}], isLoading: false}));
    
        render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);
    
        expect(fetchCatsActionSpy).not.toHaveBeenCalled();
    });
});

it("should load more cats when the load more cats button is clicked", async ()=>{
    const fetchCatsActionSpy = jest.spyOn(CatsActions, 'fetchCatsAction');
    jest.spyOn(StoreHooks, 'useAppSelector')
        .mockImplementationOnce(() => ({cats: [{id: "1"}], isLoading: false}));

    render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);


    const button = await screen.findByText('Load more cats');
    fireEvent.click(button);

    expect(fetchCatsActionSpy).toHaveBeenCalledTimes(1);
});

describe("#renderCardItems", ()=>{

    it("should render 2 CardTiles", async ()=>{
        jest.spyOn(StoreHooks, 'useAppSelector')
            .mockImplementationOnce(() => ({cats: [{id: "1"}, {id: "2"}], isLoading: false}));
    
        render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);
    
        const list = await screen.findAllByTestId('cardTile');
    
        expect(list.length).toBe(2);
    });

    it("should render 3 CardTiles", async ()=>{
        jest.spyOn(StoreHooks, 'useAppSelector')
            .mockImplementationOnce(() => ({cats: [{id: "1"}, {id: "2"}, {id: "3"}], isLoading: false}));
    
        render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);
    
        const list = await screen.findAllByTestId('cardTile');
    
        expect(list.length).toBe(3);
    });

});