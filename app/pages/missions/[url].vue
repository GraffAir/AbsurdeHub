<script setup lang="ts">
const route = useRoute();
const { find } = useStrapi();

const response = await find<Projet>('projets');
const projets: Projet[] = response.data;
const url = route.params.url;

let projet: Projet | undefined = undefined;
projets.forEach((e) => {
  console.log("Test: '"+e.url+"' est-il '"+url+"' ?");
  if (e.url == url){
    console.log("Oui !");
    projet = e;
  }
  console.log("Non !");
});
if (projet == undefined){
  console.log("Non trouvé ! Abandon !");
  showError({
    status: 404,
    statusText: 'Mission introuvable',
  })
  throw new Error("404: Mission introuvable");
}
</script>

<template>
<main>
  <MDC :value="projet.description" />
</main>
</template>

<style scoped>

</style>