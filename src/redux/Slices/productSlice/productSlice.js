import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product:[]
}
 const productSlice= createSlice({
    name: "productSlice",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.product.push(action.payload)
        },
        removeProduct:(state, action)=>{
            console.log("paylod", action.payload)
            state.product.splice(action.payload, 1)
        }

    }
}) 
export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer