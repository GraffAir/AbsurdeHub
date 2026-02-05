<script setup lang="ts">

console.log("Test de Strapi");
const { find } = useStrapi();



console.log("Récupération des projets...");
const response = await find<Projet>('projets');
const projets: Projet[] = response.data;

</script>

<template>
  <div class="widget">
    <WidgetHeader titre="Missions vedette" />
    <div v-for="projet in projets">
      <WidgetCardProject :projet="projet" />
    </div>
  </div>
</template>

<style scoped>
</style>