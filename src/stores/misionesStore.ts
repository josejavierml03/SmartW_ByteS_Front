import { defineStore } from 'pinia';
import Axios from 'axios';
const API = 'https://localhost:44347/api/Misiones';

interface IMision{
  codigo: string,
  descripcion: string,
  estado: string,
  nombreOperativo: string
}

interface IState{
  misionCurrent: IMision,
  misiones: IMision[]
}

export const useMisionStore = defineStore('misionStore', {
  state: ():IState=>{
    return{
      misionCurrent:{
        codigo:'',
        descripcion:'',
        estado:'',
        nombreOperativo: ''
      },
      misiones: []
    }
  },
  actions:{
    async addMision(mision:IMision){
      try {
        const {codigo, descripcion, estado, nombreOperativo} = mision;
        const data = await Axios({
          url:API,
          method:'POST',
          data:{
            codigo,
            descripcion,
            estado,
            nombreOperativo
          }
        });
        if(data.status == 201){
          this.mision.push(data.data);
          this.misionCurrent = {
            codigo:'',
            descripcion:'',
            estado:'',
            nombreOperativo:''
          }
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllMisiones(){
      try {
        const data = await Axios({
          url:API,
          method:'GET'
        })
        
        this.misiones = data.data;
      } catch (error) {
        console.log(error);
        
      }
    }
  }
})