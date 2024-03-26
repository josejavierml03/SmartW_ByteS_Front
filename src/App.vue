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
          <v-list-item prepend-icon="mdi-account-group" title="Team" value="team" ></v-list-item>
          <v-list-item prepend-icon="mdi-checkbox-outline" title="Operativo" value="operativo" ></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-m-circle" title="Mision" value="mision" ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main style="height: 200px">
        <!-- <h1>Home</h1>
        <RouterView /> -->
      </v-main>
    </v-layout>
  </v-card>

  <div class="mt-4" >

    <v-card width="400" color="indigo-darken-3">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
  </div>

  <div class="mt-4">

      <v-card width="400" color="indigo-darken-3">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          This is content
        </v-card-text>
      </v-card>
  </div>

  <div class="mt-4">

      <v-card width="400" color="indigo-darken-3">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          This is content
        </v-card-text>
      </v-card>
  </div>

  
</template>

<script setup>

</script>
