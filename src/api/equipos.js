import axios from "axios";

export const getEquipos = () => {
   return axios.get('https://localhost:44347/api/Equipos')  
}