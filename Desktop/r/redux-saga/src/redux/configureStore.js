import { configureStore } from "@reduxjs/toolkit";
import homeProductReducer from "./slices/homeProduct";

export const store = configureStore({
    reducer: {
        latestProduct: homeProductReducer,
    },
});