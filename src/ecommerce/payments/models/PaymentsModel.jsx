import { getPaymentData } from "../helpers/UtilsPayments";
export function PaymentsModel() {
    let Payments = {
        IdInstitutoOK: { type: String, required: true },
        IdNegocioOK: { type: String, required: true },
        IdPagoOK: { type: String, required: true },
        IdPagoBK: { type: String, required: true },
        IdOrdenOK: { type: String, required: true },
        MontoTotal: { type: Number, required: true },
        Observacion: { type: String },
    };
    return Payments;
};
