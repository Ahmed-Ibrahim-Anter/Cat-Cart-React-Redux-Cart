import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import quantitySlice from "./quantitySlice";


const store = configureStore({
    reducer: {
        quantity:quantitySlice,
        product:productSlice
    },
  })


export default store;