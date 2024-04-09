<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        location="right"
        permanent
      >
        <template #prepend>
          <v-list-item
            lines="two"
            prepend-avatar="@/assets/logoB.png"
            title="ByteStorm Solutions"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-outline" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Team" value="team" to="/teams" ></v-list-item>
          <v-list-item prepend-icon="mdi-checkbox-outline" title="Operativo" value="operativo" to="/operativo" ></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-m-circle" title="Mision" value="mision" to="/mision" ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main>
         <h1>ByteStorm Solutions</h1>
         <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-card>


</template>

<script setup>

</script>

<style>
h1{
  padding-top: 25px;
  padding-left: 15px;
}

</style>
