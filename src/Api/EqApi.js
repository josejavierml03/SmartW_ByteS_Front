import axios from "axios";

export default getEquipos = () => {
    axios.get('https://localhost:44347/api/Equipos')  
}