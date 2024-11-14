import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Typography, TextField, DialogActions, Box, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
// Formik - Yup
import { useFormik } from "formik";
import * as Yup from "yup";
// Helpers
import { PaymentValues } from "../../helpers/PaymentValues";
// Services
import { AddOnePayment } from "../../../payments/services/remote/post/AddOnePayment";

const AddPaymentsModal = ({AddPaymentsShowModal, setAddPaymentsShowModal}) => {
    const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
    const [mensajeExitoAlert, setMensajeExitoAlert] = useState("");
    // Definition Formik y Yup.
    const formik = useFormik({
        initialValues: {
            IdInstitutoOK: "",
            IdNegocioOK: "",
            IdPagoOK: "",
            IdPagoBK: "",
            IdOrdenOK: "",
            MontoTotal: "",
            Observacion: ""
        },
        validationSchema: Yup.object({
            IdInstitutoOK: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z0-9]+$/, "Solo se permiten caracteres alfanuméricos"),
        IdNegocioOK: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z0-9]+$/, "Solo se permiten caracteres alfanuméricos"),
        IdPagoOK: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z0-9]+$/, "Solo se permiten caracteres alfanuméricos"),
        IdPagoBK: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z0-9]+$/, "Solo se permiten caracteres alfanuméricos"),
        IdOrdenOK: Yup.string()
            .required("Campo requerido")
            .matches(/^[a-zA-Z0-9]+$/, "Solo se permiten caracteres alfanuméricos"),
        MontoTotal: Yup.number()
            .required("Campo requerido")
            .min(1, "El monto debe ser mayor a 0")
            .typeError("Debe ser un número"),
        Observacion: Yup.string()
            .required("Campo requerido")
            .max(255, "La observación no puede exceder los 255 caracteres"),
        }),
        onSubmit: async (values) => {
            console.log("Entro al onSubmit despues de hacer click en boton Guardar");

            // reiniciamos los estados de las alertas de exito y error.
            setMensajeErrorAlert(null);
            setMensajeExitoAlert(null);

            try {
                //Extraer los datos de los campos de
                //la ventana modal que ya tiene Formik.
                const Payment = PaymentValues(values);
                await AddOnePayment(Payment);
                //Mandamos a consola los datos extraidos
                console.log("<<Payment>>", Payment);
                setMensajeExitoAlert("PAGO creado y guardado Correctamente");

            } catch (e) {
                setMensajeExitoAlert(null);
                setMensajeErrorAlert(`No se pudo crear el PAGO`);
            }
            },
    });
    // props structure for TextField Control.
    const commonTextFieldProps = {
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        fullWidth: true,
        margin: "dense",
        disabled: !!mensajeExitoAlert,
    };
    return(
        <Dialog 
            open={AddPaymentsShowModal}
            onClose={() => setAddPaymentsShowModal(false)}
            fullWidth
        >
            <form onSubmit={formik.handleSubmit}>
                {/* FIC: Aqui va el Titulo de la Modal */}
                <DialogTitle>
                    <Typography component="h6">
                        <strong>Agregar Nuevo Pago</strong>
                    </Typography>
                </DialogTitle>
                {/* FIC: Aqui va un tipo de control por cada Propiedad de Pagos */}
                <DialogContent 
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    dividers
                >
                    {/* FIC: Campos de captura o selección */}
                    <TextField
                        id="IdInstitutoOK"
                        label="IdInstitutoOK*"
                        value={formik.values.IdInstitutoOK}
                        /* onChange={formik.handleChange} */
                        {...commonTextFieldProps}
                        error={formik.touched.IdInstitutoOK && Boolean(formik.errors.IdInstitutoOK)}
                        helperText={formik.touched.IdInstitutoOK && formik.errors.IdInstitutoOK}
                    />
                    <TextField
                        id="IdNegocioOK"
                        label="IdNegocioOK*"
                        value={formik.values.IdNegocioOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdNegocioOK && Boolean(formik.errors.IdNegocioOK)}
                        helperText={formik.touched.IdNegocioOK && formik.errors.IdNegocioOK}
                    />
                    <TextField
                        id="IdPagoOK"
                        label="IdPagoOK*"
                        value={formik.values.IdPagoOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdPagoOK && Boolean(formik.errors.IdPagoOK)}
                        helperText={formik.touched.IdPagoOK && formik.errors.IdPagoOK}
                    />
                    <TextField
                        id="IdPagoBK"
                        label="IdPagoBK*"
                        value={formik.values.IdPagoBK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdPagoBK && Boolean(formik.errors.IdPagoBK)}
                        helperText={formik.touched.IdPagoBK && formik.errors.IdPagoBK}
                    />
                    <TextField
                        id="IdOrdenOK"
                        label="IdOrdenOK*"
                        value={formik.values.IdOrdenOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdOrdenOK && Boolean(formik.errors.IdOrdenOK)}
                        helperText={formik.touched.IdOrdenOK && formik.errors.IdOrdenOK}
                    />
                    <TextField
                        id="MontoTotal"
                        label="MontoTotal*"
                        value={formik.values.MontoTotal}
                        {...commonTextFieldProps}
                        error={formik.touched.MontoTotal && Boolean(formik.errors.MontoTotal)}
                        helperText={formik.touched.MontoTotal && formik.errors.MontoTotal}
                    />
                    <TextField
                        id="Observacion"
                        label="Observacion*"
                        value={formik.values.Observacion}
                        {...commonTextFieldProps}
                        error={formik.touched.Observacion && Boolean(formik.errors.Observacion)}
                        helperText={formik.touched.Observacion && formik.errors.Observacion}
                    />
                </DialogContent>
                {/* FIC: Aqui van las acciones del usuario como son las alertas o botones */}
                <DialogActions
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Box m="auto">
                        {console.log("mensajeExitoAlert", mensajeExitoAlert)}
                        {console.log("mensajeErrorAlert", mensajeErrorAlert)}
                        {mensajeErrorAlert && (
                        <Alert severity="error">
                            <b>¡ERROR!</b> ─ {mensajeErrorAlert}
                        </Alert>
                        )}
                        {mensajeExitoAlert && (
                        <Alert severity="success">
                            <b>¡ÉXITO!</b> ─ {mensajeExitoAlert}
                        </Alert>
                        )}
                    </Box>
                    {/* FIC: Boton de Cerrar. */}
                    <LoadingButton
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => setAddPaymentsShowModal(false)}
                    >
                        <span>CERRAR</span>
                    </LoadingButton>
                     {/* FIC: Boton de Guardar. */}
                     <LoadingButton
                        color="primary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit"
                        disabled={!!mensajeExitoAlert}
                        //onClick={() => setAddInstituteShowModal(false)}
                    >
                        <span>GUARDAR</span>
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
};
export default AddPaymentsModal;