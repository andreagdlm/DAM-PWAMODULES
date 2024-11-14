// PARA INFO GENERAL
import axios from "axios";

// Función para obtener todos los pagos
export function getAllPayments() {
    return new Promise((resolve, reject) => {  
      axios.get(import.meta.env.VITE_API_URL)
        .then((response) => {

          console.log(response.data);
          const data = response.data;
  
          if (!Array.isArray(data)) {
            console.error("No se pudo realizar correctamente la petición <<getAllPayments - Services>>", data);
            reject(data);
          } else if (data.length === 0) {
            console.info("🛈 No se encontraron documentos en <<pagos>>");
            resolve([]); 
          } else{
            console.log("Colección: <<pagos>>", data);
            resolve(data);
          }
        })
        .catch((error) => {
          console.error("Error en <<getAllPayments - Services>>", error);
          reject(error); 
        });
    });
  }
