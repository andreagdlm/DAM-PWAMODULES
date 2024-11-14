// TABLA FACTURA
import React, { useEffect, useState } from "react";
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllPayments } from '../../services/remote/GetAllPayments';

const FacturaColumns = [
  {
    accessorKey: "IdPersonaOK",
    header: "ID PERSONA OK",
    size: 30,
  },
  {
    accessorKey: "Nombre",
    header: "NOMBRE",
    size: 50,
  },
  {
    accessorKey: "RFC",
    header: "RFC",
    size: 30,
  },
  {
    accessorKey: "correo",
    header: "CORREO",
    size: 30,
  },
  {
    accessorKey: "Telefono",
    header: "TELEFONO",
    size: 30,
  },
  {
    accessorKey: "IdTipoFacturaOK",
    header: "ID TIPO FACTURA OK",
    size: 30,
  },
  {
    accessorKey: "IdTipoPago",
    header: "ID TIPO PAGO",
    size: 30,
  }
];

const FacturaTable = () => {
  const [loadingTable, setLoadingTable] = useState(true);
  const [facturaDataState, setfacturaDataState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const allPaymentsData = await getAllPayments();
        
        // Extraemos solo los datos de `forma_pago` de cada pago
        const facturaData = allPaymentsData.flatMap(payment => payment.factura || []);
        
        setfacturaDataState(facturaData);
        setLoadingTable(false);
      } catch (error) {
        console.error("Error al obtener los datos de factura:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Box>
        <MaterialReactTable
          columns={FacturaColumns}
          data={facturaDataState}
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

export default FacturaTable;
