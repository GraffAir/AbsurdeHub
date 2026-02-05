<script setup lang="ts">

</script>

<template>
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Asimovian&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Boldonse&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

html {
  --primary-color: #EFD690;
  --accent-color: #7327d1;
  --background-color: #0C0537;
}

body {
  background: fixed url("/images/stars.png"), var(--background-color);
}

p, h1, h2, h3, h4, h5, h6, a {
  color:white;
  font-family: "Ubuntu", serif;
}
</style>