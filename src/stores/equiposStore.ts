import { defineStore } from 'pinia';
import Axios from 'axios';
import { getEquipos } from '@/api/equipos';
const API = 'https://localhost:44347/api/Equipos';

interface IEquipo{
  id?: number,
  tipo: string,
  descripcion: string,
  estado: "Disponible" | "Ocupado" | ''
}

interface IState{
  equipoCurrent: IEquipo,
  equipos: IEquipo[]
}

export const useEquipoStore = defineStore('equipoStore', {
  state: ():IState=>{
    return{
      equipoCurrent:{
        tipo:'',
        descripcion:'',
        estado:''
      },
      equipos: []
    }
  },
  actions:{
    async addEquipo(equipo:IEquipo){
      try {
        const {tipo, descripcion, estado} = equipo;
        const data = await Axios({
          url:API,
          method:'POST',
          data:{
            tipo,
            descripcion,
            estado
          }
        });
          this.equipos.push(data.data);
          this.equipoCurrent = {
            tipo:'',
            descripcion:'',
            estado:''
          }
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllEquipos(){
      try {
        const response = await getEquipos();
        this.equipos = response.data;
      } catch (error) {
        console.log(error);
        
      }
    }
  }
})