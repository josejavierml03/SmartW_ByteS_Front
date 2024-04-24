<template>
    <form @submit.prevent="send">
      <h1>Agregar Mision</h1>
      <div>
        <input type="text" placeholder="Código" required v-model="misionCurrent.codigo">
      </div>
      <div>
        <input type="text" placeholder="Descripción" required v-model="misionCurrent.descripcion" >
      </div>
      <div>
        <input type="text" placeholder="Estado" required v-model="misionCurrent.estado" >
      </div>
      <div>
        <input type="text" placeholder="Operativo" required v-model="misionCurrent.nombreOperativo">
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
   import { defineComponent } from 'vue'
  import {mapState, mapActions} from 'pinia'
  import {useMisionStore} from '@/stores/misionesStore'
  

  export default defineComponent({
    setup() {
      
    },
    methods:{
      ...mapActions(useMisionStore, ['addMision']),
      send(){
        this.addMision(this.misionCurrent);
      }
    },
    computed:{
      ...mapState(useMisionStore, ['misionCurrent'])
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