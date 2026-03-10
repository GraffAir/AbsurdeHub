<script setup lang="ts">
const route = useRoute();
const { find } = useStrapi();

const response = await find<Projet>('projets');
const projets: Projet[] = response.data;
const url = route.params.url;

let projet: Projet | undefined = undefined;
projets.forEach((e) => { if (e.url == url) projet = e; });

if (!projet) {
  showError({ status: 404, statusText: 'Mission introuvable' });
  throw new Error("404: Mission introuvable");
}
</script>

<template>
  <CRT>
    <header>
      <div class="retour">
        <NuxtLink to="/profil" class="retro-icon-button" title="Retour au profil">
          ◄
        </NuxtLink>
      </div>
      <div class="titre">
        <h1>≫ {{ projet.titre }}</h1>
      </div>
    </header>
  </CRT>

  <CRT>
    <main>
      <MDC :value="projet.description" />
      <div v-for="savoir in projet.savoirs"></div>
    </main>
  </CRT>
</template>

<style scoped>
/* Police retro-futuriste */
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

header, main {
  margin: 20px 10%;
}

main {
  padding: 2%;
  background: rgba(0, 0, 0, 0.38);
  color: #c7b8e8;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
}

header {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

/* Bouton icône rétro-futuriste */
.retour {
  display: flex;
  align-items: center;
  justify-content: center;
}

.retro-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #987aac;
  text-decoration: none;
  background: rgba(16, 10, 30, 0.7);
  border: 1px solid rgba(123, 0, 255, 0.3);
  border-radius: 2px;
  box-shadow:
      inset 0 1px 0 rgba(0, 89, 255, 0.3),
      inset 0 -1px 0 rgba(138, 43, 226, 0.3),
      0 0 4px rgba(247, 0, 255, 0.2);
  transition: all 0.1s ease;
  cursor: pointer;
}

.retro-icon-button:hover {
  background: rgba(16, 10, 30, 0.9);
  box-shadow:
      inset 0 1px 0 rgba(0, 13, 255, 0.5),
      inset 0 -1px 0 rgba(192, 43, 226, 0.5),
      0 0 6px rgba(183, 0, 255, 0.4);
  color: #e6d9ff;
}

.retro-icon-button:active {
  transform: translateY(1px);
  box-shadow:
      inset 0 1px 0 rgba(0, 255, 255, 0.2),
      inset 0 -2px 0 rgba(138, 43, 226, 0.7);
}

/* Titre de la mission */
.titre {
  flex-grow: 1;
  background: rgba(16, 10, 30, 0.8);
  padding: 20px;
  border-left: 3px solid #9900ff;
  border-radius: 0 4px 4px 0;
  box-shadow: inset 0 0 15px rgba(138, 43, 226, 0.2);
}

.titre h1 {
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 2.8rem;
  font-weight: 700;
  color: #b19cd9;
  text-shadow: 0 0 7px rgba(187, 134, 252, 0.7);
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.2;
}
</style>
