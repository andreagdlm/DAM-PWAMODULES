//NOTA: Este archivo contiene funciones ASÍNCRONAS 
//que nos ayuda a obtener la respuesta del servidor 
//y poder mandarla al SLICE y a su estado
import { getPaymentsAll } from './actions/paymenysAction';
import { SET_DATA_PAYMENTS } from './slices/paymentsSlice';

export const GET_DATA_START = () => {
    return async (dispatch, getState) => {
        dispatch(
            SET_DATA_PAYMENTS(
                await getPaymentsAll(),
            )
        );
    };
};
