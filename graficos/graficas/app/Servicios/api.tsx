
import axios from "axios";
const API_URL="http://localhost:5000"

export const fetchSumaSalario = async () => {
    const response= await axios.get(`${API_URL}/sum-salary-by-depto`)
   return response.data

}

export const fetchCantidadJobs = async () => {
    const response= await axios.get(`${API_URL}/count-by-deparment-job`)
   return response.data

}