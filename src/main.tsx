import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { persistor, store } from './store/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/chakra-theme.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>,
)
