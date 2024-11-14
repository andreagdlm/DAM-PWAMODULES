import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";

const PaymentsTabs = [
    "Información General", 
    "Forma de Pago", 
    "Estatus del Pago", 
    "Factura",
    "Detalles Adicionales"
];

const PaymentsNavTab = ({ setCurrentTabInPrincipalTab }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleChange = (e) => {
        const tabName = e.target.innerText.toUpperCase();
        console.log("Click a", tabName);
        
        setCurrentTabInPrincipalTab(tabName);
        
        switch (tabName) {
            case "INFORMACIÓN GENERAL":
                setCurrentTabIndex(0);
                break;
            case "FORMA DE PAGO":
                setCurrentTabIndex(1);
                break;
            case "ESTATUS DEL PAGO":
                setCurrentTabIndex(2);
                break;
            case "FACTURA":
                setCurrentTabIndex(3);
                break;
            case "DETALLES ADICIONALES":
                setCurrentTabIndex(4);
                break;
            default:
                setCurrentTabIndex(0);
                break;
        }
    };

    return (
        <Box sx={{ border: 2, borderColor: (theme) => theme.palette.divider, mx: 1, padding: 0.5 }}>
            <Tabs
                value={currentTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {PaymentsTabs.map((tab) => (
                    <Tab key={tab} label={tab} />
                ))}
            </Tabs>
        </Box>
    );
};

export default PaymentsNavTab;
