import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slices/productSlice/productSlice";

export const store= configureStore({
    reducer:{
        productSlice
    }
})