import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//todo refactor redux code DONE
//todo shadow cart DONE
//todo scroll border radius cart DONE
//todo cart slow animation DONE
//todo order page verstka
//todo order page validity
//todo download pictures
//todo slider border radius
//todo slider buttons black onActive
//todo detailed page
root.render(
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
                <App />
      </BrowserRouter>
  </React.StrictMode>
    </Provider>

);

