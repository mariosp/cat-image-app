import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CatImages from './CatImages';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import * as StoreHooks from "../../store/hooks";

afterEach(cleanup);

describe('On mount', ()=> {
    it("Should dispatch action to fetch cats if length is falsy", () => {
        const dispatchMock = jest.spyOn(StoreHooks, 'useAppDispatch')
        .mockReturnValue(jest.fn());
        jest
        .spyOn(StoreHooks, 'useAppSelector')
        .mockImplementationOnce(() => ({cats: [], isLoading: true}));
    
       render(<Provider store={store}><BrowserRouter><CatImages /></BrowserRouter></Provider>);
    
        expect(dispatchMock).toHaveBeenCalled();
    });
});