import { defineStore } from 'pinia'
import axios from "axios"

export const useEquiposStore = defineStore("equipos", {
    state: () => ({
        equipos: [],
        
    }),
    getters: {
      getEquipos(state){
          return state.equipos
        }
    },
    actions: {
      async fetchEquipos() {
        try {
          const data = await axios.get('https://localhost:44347/api/Equipos')
            this.equipos = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})