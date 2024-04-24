<template>
    <form @submit.prevent="send">
      <h1>Agregar Equipo</h1>
      <div>
        <input type="text" placeholder="Tipo" required v-model="equipoCurrent.tipo">
      </div>
      <div>
        <input type="text" placeholder="Descripción" required v-model="equipoCurrent.descripcion">
      </div>
      <div>
        <input type="text" placeholder="Estado" required v-model="equipoCurrent.estado">
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import {mapState, mapActions} from 'pinia'
  import {useEquipoStore} from '@/stores/equiposStore'
  
  export default defineComponent({
    setup() {
      
    },
    methods:{
      ...mapActions(useEquipoStore, ['addEquipo']),
      send(){
        this.addEquipo(this.equipoCurrent);
      }
    },
    computed:{
      ...mapState(useEquipoStore, ['equipoCurrent'])
    }
  })
  </script>
  
  
  <style scoped>
  form{
      max-width: 800px;
      margin:auto;
      padding: 10px;
      margin-top: 10px;
      
    }
    h1{
      text-align: center;
      color: white;
    }
    input{
      width: 98%;
      padding: 5px;
      border-radius: 10px;
      margin-top: 10px;
      border-color: transparent;
      font-size: 15px;
    }
    button{
      border-color: transparent;
      background: #04AA6D;
      width: 100%;
      padding: 5px;
      color: white;
      margin-top: 10px;
      border-radius: 10px;
      font-size: 20px;
    }
  </style>