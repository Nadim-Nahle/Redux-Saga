import { configureStore } from "@reduxjs/toolkit";
import homeProductReducer from "./slices/homeProduct";
import allProductsReducer from "./slices/allProducts";
import createSagaMiddleware from "@redux-saga/core";

const saga = createSagaMiddleware;

export const store = configureStore({
    reducer: {
        latestProduct: homeProductReducer,
        products: allProductsReducer,
    },
    middleware: [saga]
});