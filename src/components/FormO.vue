<template>
    <form @submit.prevent="send">
      <h1>Agregar Operativo</h1>
      <div>
        <input type="text" placeholder="Nombre" required v-model="operativoCurrent.nombre">
      </div>
      <div>
        <input type="text" placeholder="Rol" required v-model="operativoCurrent.rol">
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import {mapState, mapActions} from 'pinia'
  import {useOperativoStore} from '@/stores/operativosStore'
  
  export default defineComponent({
    setup() {
      
    },
    methods:{
      ...mapActions(useOperativoStore, ['addOperativo']),
      send(){
        this.addOperativo(this.operativoCurrent);
      }
    },
    computed:{
      ...mapState(useOperativoStore, ['operativoCurrent'])
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