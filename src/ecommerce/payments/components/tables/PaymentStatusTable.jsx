// TABLA ESTATUS
import React, { useEffect, useState } from "react";
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllPayments } from '../../services/remote/GetAllPayments';

const PaymentStatusColumns = [
  {
    accessorKey: "IdTipoEstatusOK",
    header: "ID TIPO ESTATUS OK",
    size: 30,
  },
  {
    accessorKey: "Actual",
    header: "ACTUAL",
    size: 50,
  },
  {
    accessorKey: "Observacion",
    header: "OBSERVACION",
    size: 30,
  }
];

const PaymentStatusTable = () => {
  const [loadingTable, setLoadingTable] = useState(true);
  const [paymentStatusDataState, setpaymentStatusDataState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const allPaymentsData = await getAllPayments();
        
        // Extraemos solo los datos de `forma_pago` de cada pago
        const statusData = allPaymentsData.flatMap(payment => payment.estatus || []);
        
        setpaymentStatusDataState(statusData);
        setLoadingTable(false);
      } catch (error) {
        console.error("Error al obtener los datos de estatus:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Box>
        <MaterialReactTable
          columns={PaymentStatusColumns}
          data={paymentStatusDataState}
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

export default PaymentStatusTable;
