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
          <v-list-item prepend-icon="mdi-twitter" title="Team" value="team" to="/teams" ></v-list-item>
          <v-list-item prepend-icon="mdi-checkbox-outline" title="Operativo" value="operativo" to="/operativo" ></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-m-circle" title="Mision" value="mision" to="/mision" ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <div id ="Contacto">
          <Strong>Contactanos</Strong>
        </div>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-instagram" title="Instagram" value="instagram" href="https://www.instagram.com"></v-list-item>
          <v-list-item prepend-icon="mdi-twitter" title="Twitter" value="twitter"  href="https://www.twitter.com" ></v-list-item>
          <v-list-item prepend-icon="mdi-email-fast-outline" title="EMail" value="mail" href="mailto:info@byteStorm.com"></v-list-item>
        </v-list>

        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Copyright R®</strong>
        </v-card-text>

      </v-navigation-drawer>
      
      <v-main>
        <div id="Titulo">
         <h1>ByteStorm Solutions</h1>
        </div>
         <RouterView></RouterView>
      </v-main>
      
    </v-layout>
  </v-card>


</template>

<script setup>

</script>

<style>
#Titulo{
  background-color: rgb(26, 26, 26);
  padding-top: 5px;
  padding-bottom: 25px;
}

h1{
  padding-top: 15px;
  padding-left: 15px;
}

#Contacto{
  padding-top: 10px;
  padding-left: 5px;
}
</style>
