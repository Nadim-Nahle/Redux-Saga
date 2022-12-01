import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false
};

export const allProducts = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
    },
});

export const { getProductsFetch, getProductsSuccess } = allProducts.actions;

export default allProducts.reducer;