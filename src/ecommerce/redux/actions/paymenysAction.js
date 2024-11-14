import axios from 'axios';

export async function getPaymentsAll() {
    const url = `${import.meta.env.VITE_API_URL}/pagos`;
    let result = await axios.get(`${import.meta.env.VITE_API_URL}/pagos`); 
    console.log('<<AXIOS-PAGOS>>: ', result.data);
    return result.data;
}
