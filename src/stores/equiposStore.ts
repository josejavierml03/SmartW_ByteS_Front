import { defineStore } from 'pinia';
import Axios from 'axios';
const API = 'https://localhost:44347/api/Equipos';

interface IEquipo{
  _id?: string,
  tipo: string,
  descripcion: string,
  estado: string,
  operativo: string
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
        estado:'',
        operativo:''
      },
      equipos: []
    }
  },
  actions:{
    async addEquipo(equipo:IEquipo){
      try {
        const {tipo, descripcion, estado, operativo} = equipo;
        const data = await Axios({
          url:API,
          headers: {"Access-Control-Allow-Origin": "*"},
          method:'POST',
          data:{
            tipo,
            descripcion,
            estado,
            operativo
          }
        });
        if(data.status == 200){
          this.equipos.push(data.data);
          this.equipoCurrent = {
            tipo:'',
            descripcion:'',
            estado:'',
            operativo:''
          }
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllEquipos(){
      try {
        const data = await Axios({
          url:API,
          headers: {"Access-Control-Allow-Origin": "*"},
          method:'GET'
        })
        
        this.equipos = data.data;
      } catch (error) {
        console.log(error);
        
      }
    },
  }
})