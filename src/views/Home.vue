<template>
<h1>Home - Blog</h1>

<div class="d-flex align-center flex-column">
<div class="mt-4" >
<v-card width="750" color="indigo-darken-3">
  <v-card-item>
    <v-card-title>RELAX</v-card-title>

    <v-card-subtitle>Keep Calm and Code</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    Bienvenidos a un espacio donde la programación se fusiona con la tranquilidad,
    creemos que la creatividad y la eficacia encuentran su mejor expresión cuando la mente está en un estado de total relax.
    Aquí, programar no es una tarea, es una experiencia tranquila y fluida.
    Descubre un entorno diseñado para inspirar, donde la relajación se convierte en la clave para desbloquear la verdadera innovación.
  </v-card-text>
</v-card>
</div>

<div class="mt-4">

  <v-card width="750" color="indigo-darken-3">
    <v-card-item>
      <v-card-title>CREATIVIDAD</v-card-title>

      <v-card-subtitle>¡Disfruta como un niño!</v-card-subtitle>

    </v-card-item>

    <v-card-text>
        Descubre un entorno diseñado para inspirar la creatividad, donde los desafíos técnicos se entrelazan con emocionantes posibilidades creativas.
        Programar va más allá de la simple tarea; es un viaje apasionante hacia la creación digital.
        Únete a nosotros y sumérgete en un mundo donde la creatividad y el código convergen para dar vida a algo verdaderamente extraordinario.
        ¡Bienvenido a la sinfonía creativa de la programación en ByteStorm!
    </v-card-text>
  </v-card>
</div>

<div class="mt-4 mb-6">

  <v-card width="750" color="indigo-darken-3">
    <v-card-item>
      <v-card-title>CODIGO</v-card-title>

      <v-card-subtitle>La parte más importante</v-card-subtitle>
    </v-card-item>

    <v-card-text>
        La programación es el arte de dar vida a las ideas en el mundo digital.
        Cada línea de código es una pincelada que configura la funcionalidad, y cada programa es una creación única.
        Es un lenguaje que transforma conceptos en acciones, permitiendo a los programadores ser los arquitectos del futuro tecnológico.
    </v-card-text>
  </v-card>
</div>
</div>
<v-card
    class="mx-auto mb-6"
    elevation="20"
    max-width="750"
  >
  <v-carousel>
  <v-carousel-item
    src="@/assets/code.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="@/assets/imagen2.png"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="@/assets/imagen3.png"
    cover
  ></v-carousel-item>

  </v-carousel>
</v-card>
</template>

