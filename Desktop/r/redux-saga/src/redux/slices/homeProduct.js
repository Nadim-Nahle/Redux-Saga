import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: "",
};

export const latestProduct = createSlice({
    name: "latestProduct",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { setProduct } = latestProduct.actions;

export default latestProduct.reducer;