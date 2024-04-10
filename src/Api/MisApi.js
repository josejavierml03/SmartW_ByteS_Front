import axios from "axios";

export default getMisiones = () => {
    axios.get('https://localhost:44347/api/Misiones')  
}