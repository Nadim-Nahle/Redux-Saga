import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: "",
};

export const homeProduct = createSlice({
    name: "latestProduct",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { setProduct } = homeProduct.actions;

export default homeProduct.reducer;