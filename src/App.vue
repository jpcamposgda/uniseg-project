<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  =======
  <router-view />
  >>>>>>> 37e9504f95a0d666afdf0b00aa54b1237be15fd3
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

html,
body {
  font-family: 'Quicksand', sans-serif;

  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(99, 225, 253, 1) 55%
  );
}
</style>
