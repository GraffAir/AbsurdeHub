<script setup lang="ts">
defineProps<{texte: string, to: string}>();
</script>

<template>
  <p>
  <NuxtLink :to="to">
    <img src='/images/arrow.svg' alt='>' width="30" height="20">
    {{texte}}
    <img src='/images/arrow.svg' alt='>' width="30" height="20" style="transform: scaleX(-1)"></NuxtLink>
  </p>
</template>

<style scoped>
p {
  align-content: center;
}

a {
  color:white;
  text-decoration: none;
  font-size:26pt;
  font-family: 'Asimovian', "Roboto Light", sans-serif;
}

a img {
  display:inline;
  visibility: hidden;
  margin:8px;
}

a:hover {
  color: var(--accent-color)
}

a:hover img {
  visibility: visible;
}
</style>