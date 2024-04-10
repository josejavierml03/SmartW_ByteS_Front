import axios from "axios";

export default getOperativos = () => {
    axios.get('https://localhost:44347/api/Operativos')
}