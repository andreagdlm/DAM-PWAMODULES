// TABLA FORMA DE PAGO
import React, { useEffect, useState } from "react";
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton, Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllPayments } from '../../services/remote/GetAllPayments';

const PaymentMethodColumns = [
  {
    accessorKey: "IdTipoMetodoOK",
    header: "ID TIPO METODO OK",
    size: 30,
  },
  {
    accessorKey: "Monto",
    header: "MONTO",
    size: 50,
  },
  {
    accessorKey: "IdTipoMonedaOK",
    header: "ID TIPO MONEDA OK",
    size: 30,
  },
  {
    accessorKey: "pago_tarjeta.Banco",
    header: "BANCO",
    size: 50,
  },
  {
    accessorKey: "pago_tarjeta.NombreTitular",
    header: "NOMBRE TITULAR",
    size: 50,
  },
  {
    accessorKey: "datos_transaccion.IdTransaccion",
    header: "ID TRANSACCION",
    size: 50,
  },
  {
    accessorKey: "datos_transaccion.FechaReg",
    header: "FECHA REG",
    size: 50,
  },
];

const PaymentMethodTable = () => {
  const [loadingTable, setLoadingTable] = useState(true);
  const [paymentMethodsDataState, setPaymentMethodsDataState] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const allPaymentsData = await getAllPayments();
        
        // Extraemos solo los datos de `forma_pago` de cada pago
        const formaPagoData = allPaymentsData.flatMap(payment => payment.forma_pago || []);
        
        setPaymentMethodsDataState(formaPagoData);
        setLoadingTable(false);
      } catch (error) {
        console.error("Error al obtener los datos de forma_pago:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Box>
        <MaterialReactTable
          columns={PaymentMethodColumns}
          data={paymentMethodsDataState}
          state={{ isLoading: loadingTable }}
          initialState={{ density: "compact", showGlobalFilter: true }}
          renderTopToolbarCustomActions={({ table }) => (
            <Stack direction="row" sx={{ m: 1 }}>
              <Tooltip title="Agregar">
                <IconButton>
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Eliminar">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Detalles">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          )}
        />
      </Box>
    </Box>
  );
};

export default PaymentMethodTable;
