import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from "./store";
import Root from "./components/root/root";
import GlobalStyles from './styles/global.styles';

const container = document.getElementById('root')!
const root = createRoot(container)

const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <Root/>
    </Provider>
  </React.StrictMode>
);
