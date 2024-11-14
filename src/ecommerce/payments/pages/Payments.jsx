import { Box } from "@mui/material";
import PaymentsNavTab from "../components/tabs/PaymentsNavTab";
import { useState } from "react";
import InfoGeneralTab from "../components/tabs/InfoGeneralTab";
import PaymentMethodTab from "../components/tabs/PaymentMethodTab";
import PaymentStatusTab from "../components/tabs/PaymentStatusTab";
import FacturaTab from "../components/tabs/FacturaTab";
import DetallesAdicionalesTab from "../components/tabs/DetallesAdicionalesTab";

export default function Payments() {
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("INFORMACIÓN GENERAL");

    return (
        <Box>
            <PaymentsNavTab setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab} />

            {currentTabInPrincipalTab === "INFORMACIÓN GENERAL" && <InfoGeneralTab />}
            {currentTabInPrincipalTab === "FORMA DE PAGO" && <PaymentMethodTab />}
            {currentTabInPrincipalTab === "ESTATUS DEL PAGO" && <PaymentStatusTab />}
            {currentTabInPrincipalTab === "FACTURA" && <FacturaTab />}
            {currentTabInPrincipalTab === "DETALLES ADICIONALES" && <DetallesAdicionalesTab />}
        </Box>
    );
}
