import { defineStore } from 'pinia';
import Axios from 'axios';
const API = 'https://localhost:44347/api/Operativos';

interface IOperativo{
  nombre: string,
  rol: string
}

interface IState{
  operativoCurrent: IOperativo,
  operativos: IOperativo[]
}

export const useOperativoStore = defineStore('operativoStore', {
  state: ():IState=>{
    return{
      operativoCurrent:{
        nombre:'',
        rol:''
      },
      operativos: []
    }
  },
  actions:{
    async addOperativo(operativo:IOperativo){
      try {
        const {nombre, rol} = operativo;
        const data = await Axios({
          url:API,
          method:'POST',
          data:{
            nombre,
            rol
          }
        });
        if(data.status == 201){
          this.operativo.push(data.data);
          this.operativoCurrent = {
            nombre:'',
            rol:''
          }
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllOperativos(){
      try {
        const data = await Axios({
          url:API,
          method:'GET'
        })
        
        this.operativos = data.data;
      } catch (error) {
        console.log(error);
        
      }
    }
  }
})