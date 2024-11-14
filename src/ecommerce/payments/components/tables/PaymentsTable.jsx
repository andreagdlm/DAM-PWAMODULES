// TABLA PARA INFO GENERAL
import React, { useEffect, useState } from "react";
// Importaciones de Material UI
import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, IconButton, Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
// Importación de datos de pagos
import { getAllPayments } from '../../services/remote/GetAllPayments';
// Modals
import AddPaymentsModal from "../modals/AddPaymentsModal";

// Definición de columnas de la tabla de pagos
const PaymentsColumns = [
  {
    accessorKey: "IdInstitutoOK",
    header: "ID INSTITUTO OK",
    size: 30,
  },
  {
    accessorKey: "IdNegocioOK",
    header: "ID NEGOCIO OK",
    size: 30,
  },
  {
    accessorKey: "IdPagoOK",
    header: "ID PAGO OK",
    size: 30,
  },
  {
    accessorKey: "IdPagoBK",
    header: "ID PAGO BK",
    size: 30,
  },
  {
    accessorKey: "IdOrdenOK",
    header: "ID ORDEN OK",
    size: 30,
  },
  {
    accessorKey: "MontoTotal",
    header: "MONTO TOTAL",
    size: 50,
  },
  {
    accessorKey: "Observacion",
    header: "OBSERVACION",
    size: 150,
  },
];

const PaymentsTable = () => {
  // Estado de carga de la tabla
  const [loadingTable, setLoadingTable] = useState(true);
  // Estado de los datos de pagos
  const [paymentsDataState, setPaymentsDataState] = useState([]);

  const [AddPaymentsShowModal, setAddPaymentsShowModal] = useState(false);
  
  // Obtener los pagos desde la API al cargar el componente
  useEffect(() => {
    async function fetchData() {
      try {
        const allPaymentsData = await getAllPayments();
        setPaymentsDataState(allPaymentsData);
        setLoadingTable(false);
      } catch (error) {
        console.error("Error al obtener los pagos en useEffect de PaymentsTable:", error);
        // setLoadingTable(false);
      }
    }
    fetchData(); // Llama a la función para obtener los pagos
  }, []);

  return (
    <Box>
      <Box>
            <MaterialReactTable
              columns={PaymentsColumns}
              data={paymentsDataState}
              state={{isLoading: loadingTable}}
              initialState={{ density: "compact", showGlobalFilter: true }}
              renderTopToolbarCustomActions={({ table }) => (
                  <>
                    <Stack direction="row" sx={{ m: 1 }}>
                      <Box>
                        <Tooltip title="Agregar">
                          <IconButton 
                          onClick={() => setAddPaymentsShowModal(true)}>
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
                        <Tooltip title="Detalles ">
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Stack>
                  </>
                )}
            />
          </Box>
          {/* M O D A L E S */}
          <Dialog open={AddPaymentsShowModal}>
            <AddPaymentsModal
              AddPaymentsShowModal={AddPaymentsShowModal}
              setAddPaymentsShowModal={setAddPaymentsShowModal}
              onClose={() => setAddPaymentsShowModal(false)}
            />
          </Dialog>
        </Box>
      );
  };

export default PaymentsTable;
