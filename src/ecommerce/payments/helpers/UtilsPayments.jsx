// Genera el objeto de pagos sin el subdocumento detail_row
// Si no se envían los parámetros, los valores se asignan por defecto
export const getPaymentData = (
    IdInstitutoOK = "", 
    IdNegocioOK = "", 
    IdPagoOK = "", 
    IdPagoBK = "", 
    IdOrdenOK = "", 
    MontoTotal = 0, 
    Observacion = ""
) => {
    return {
        IdInstitutoOK,
        IdNegocioOK,
        IdPagoOK,
        IdPagoBK,
        IdOrdenOK,
        MontoTotal,
        Observacion
    };
};

// Genera un subdocumento de registro sin los campos de detalle
export const getPaymentReg = (usuarioReg = "SYSTEM") => {
    return {
        FechaReg: Date.now(),
        UsuarioReg: usuarioReg,
    };
};
