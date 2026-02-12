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
    <NuxtLink :to="`/missions/${projet.url}`" v-for="projet in projets" class="projet">
      <WidgetCardProject :projet="projet" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.projet {
  height:13vh;
  width:100%;
  display:flex;

  padding:2%;

  transition: all 0.3s ease;
  background: rgba(4, 4, 4, 0.49);
  text-decoration: none;
}

.projet:hover {
  background: rgb(54, 36, 62);
  translate:2px;
}

.widget {
  display:flex;
  flex-direction: column;
  gap:10px;
}

</style>