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
  <header>
    <div class="retour">
      <NuxtLink to="/profil">Retour au profil</NuxtLink>
    </div>
    <div class="titre"><h1>
      {{projet.titre}}
    </h1></div>
  </header>
  <main>
    <MDC :value="projet.description" />
    <div v-for="savoir in projet.savoirs">

    </div>
  </main>
</template>

<style scoped>
main, header {
  margin:20px 10%;
}

main, header > div {
  background: rgba(0, 0, 0, 0.38);
}

main {
  padding: 40px;
}

header {
  display: flex;
  justify-content: flex-start;
  gap:20px;
}

header > div {
  width:10%;
  padding: 10px 20px;
}

.retour {
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.titre {
  flex-grow: 1;
}
</style>