<script setup lang="ts">
import Project from "~/components/widget/card/Project.vue";

console.log("Test de Strapi");
const { find } = useStrapi();



console.log("Récupération des projets...");
const response = await find<Projet>('projets');
const projets: Projet[] = response.data;

</script>

<template>
  <div class="widget">
    <WidgetHeader titre="Vedette" />
    <div v-for="projet in projets">
      <WidgetCardProject :nomProjet="projet.titre" />
    </div>
  </div>
</template>

<style scoped>
</style>