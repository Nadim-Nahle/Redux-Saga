import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from "@redux-saga/core";
import productsSaga from './redux/sagas/productsSaga';
import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer from './redux/slices/allProducts'
import homeProductReducer from './redux/slices/homeProduct'


const root = ReactDOM.createRoot(document.getElementById('root'));

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    latestProduct: homeProductReducer,
    products: allProductsReducer,
  },
  middleware: [saga]
});
saga.run(productsSaga)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
