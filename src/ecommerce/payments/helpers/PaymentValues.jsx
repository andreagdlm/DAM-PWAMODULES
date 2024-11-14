import {  PaymentsModel } from "../models/PaymentsModel";

//FIC: obtiene los valores capturados en la ventana modal
//enviados desde el evento onSubmit de Formik
export const PaymentValues = (values) => {
    let Payment = PaymentsModel();
    
    Payment.IdInstitutoOK = values.IdInstitutoOK;
    Payment.IdNegocioOK = values.IdNegocioOK;
    Payment.IdPagoOK = values.IdPagoOK;
    Payment.IdPagoBK = values.IdPagoBK;
    Payment.IdOrdenOK = values.IdOrdenOK;
    Payment.MontoTotal = values.MontoTotal;
    Payment.Observacion = values.Observacion;

    return Payment;
};