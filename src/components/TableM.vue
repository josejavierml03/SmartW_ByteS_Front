<template>
    <table>
      <thead>
        <th>Codigo</th>
        <th>Descripcion</th>
        <th>Estado</th>
        <th>Operativo</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in misiones" :key="index">
          <td>{{item.codigo}}</td>
          <td>{{item.descripcion}}</td>
          <td>{{item.estado}}</td>
          <td>{{item.nombreOperativo}}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import {mapState, mapActions} from 'pinia'
  import {useMisionStore} from '@/stores/misionesStore'
  
  export default defineComponent({
    setup() {
      
    },
    methods:{
      ...mapActions(useMisionStore, ['getAllMisiones'])
    },
    computed:{
      ...mapState(useMisionStore, ['misiones']),
    },
    mounted(){
      this.getAllMisiones();
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