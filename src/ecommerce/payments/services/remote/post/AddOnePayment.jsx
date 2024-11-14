import axios from "axios";

export function AddOnePayment(Payment) {
    console.log("<<EJECUTA>> API <<AddOnePayment>> Requiere:", Payment)
    return new Promise((resolve, reject) => {
      axios.post(import.meta.env.VITE_API_URL, Payment)
        .then((response) => {
          console.log("<<RESPONSE>> AddOnePayment", response)
          const data = response.data;
          //console.log("<<RESPONSE>> DATA:", data);
          if (!data) {  
             console.error("<<ERROR>> <<NO>> se ejecuto la API <<AddOnePayment>> de forma correcta", data);
             reject(data); 
           } else if (data) {
              console.log("<<SUCCESS>> <<AddOnePayment>>")
              resolve(data);
           }
        })
        .catch((error) => {
          console.error("<<ERROR>> en API <<AddOnePayment>>", error);
          reject(error);
        });     
    });
 }