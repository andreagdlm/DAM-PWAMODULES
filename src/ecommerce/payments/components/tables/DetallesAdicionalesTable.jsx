// TABLA DETALLES ADICIONALES
import React, { useEffect, useState } from "react";
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllPayments } from '../../services/remote/GetAllPayments';

const DAColumns = [
  {
    accessorKey: "IdEtiquetaOK",
    header: "ID ETIQUETA OK",
    size: 30,
  },
  {
    accessorKey: "IdEtiqueta",
    header: "ID ETIQUETA",
    size: 50,
  },
  {
    accessorKey: "Etiqueta",
    header: "Etiqueta",
    size: 30,
  },
  {
    accessorKey: "Valor",
    header: "VALOR",
    size: 30,
  },
  {
    accessorKey: "IdTipoSeccionOK",
    header: "ID TIPO SECCION",
    size: 30,
  },
  {
    accessorKey: "Secuencia",
    header: "SECCION",
    size: 30,
  }
];

const DATable = () => {
  const [loadingTable, setLoadingTable] = useState(true);
  const [daDataState, setdaDataState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const allPaymentsData = await getAllPayments();
        
        // Extraemos solo los datos de `info_ad` de cada pago
        const daData = allPaymentsData.flatMap(payment => payment.info_ad || []);
        
        setdaDataState(daData);
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
          columns={DAColumns}
          data={daDataState}
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

export default DATable;
