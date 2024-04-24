<template>
    <table>
      <thead>
        <th>Nombre</th>
        <th>Rol</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in operativos" :key="index">
          <td>{{item.nombre}}</td>
          <td>{{item.rol}}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import {mapState, mapActions} from 'pinia'
  import {useOperativoStore} from '@/stores/operativosStore'
  
  export default defineComponent({
    setup() {
      
    },
    methods:{
      ...mapActions(useOperativoStore, ['getAllOperativos'])
    },
    computed:{
      ...mapState(useOperativoStore, ['operativos']),
    },
    mounted(){
      this.getAllOperativos();
    }  
    })
  </script>
  
  <style>
  table{
    width: 80%;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 0.5px solid;
    border-color: gray;
    border-spacing: 0;
  }
  thead{
    background: #04AA6D;
    height: 50px;
    color: #fff;
  }
  th{
    padding: 0;
  }
  tr{
    margin-top: 10px;
  }
  td{
    padding:10px;
    text-align: center;
  }
  .fila-par{
    background: #E7E9EB;
  
  }
  button{
    border-color: transparent;
    margin-right: 5px;
  }
  .completada{
    text-decoration: line-through;
  }
  </style>