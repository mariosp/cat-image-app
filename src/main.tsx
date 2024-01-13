import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/chakra-theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>,
)
