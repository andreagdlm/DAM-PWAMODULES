import { configureStore } from "@reduxjs/toolkit";
import paymentsSlice from "../slices/paymentsSlice";
//import productosSlice from "../slices/usuarios/productosSlice";

const store = configureStore({
    reducer: {
        paymentsReducer: paymentsSlice,
        //productosSliceReducer: productosSlice,
    },
});

export default store;
