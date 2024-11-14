import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //DATA
    paymentsDataArr: [],

    //SELECCIONES
    //paymentDataObj: {},

    //BOOLEANS/VARIABLES
};

const paymentsSlice = createSlice({
    name: 'PAYMENTS',
    initialState,
    reducers: {
        SET_DATA_PAYMENTS: (state, action) => { 			
            console.log('<<REDUX-REDUCER>>:<<SET_DATA_PAYMENTS>>', action.payload);
            state.paymentsDataArr = action.payload;
        },
    }
});

export const {
    SET_DATA_PAYMENTS,
    //ADD_PAYMENT_SELECTED,
    //SWITCH_STATE,
} = paymentsSlice.actions;

export default paymentsSlice.reducer;
