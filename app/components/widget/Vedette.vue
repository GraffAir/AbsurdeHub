<script setup lang="ts">

console.log("Test de Strapi");
const { find } = useStrapi();



console.log("Récupération des projets...");
const response = await find<Projet>('projets');
const projets: Projet[] = response.data;

</script>

<template>


    <WidgetHeader titre="Missions vedette" />

      <div class="projets-container">
        <CRT v-for="projet in projets">
          <NuxtLink :to="`/missions/${projet.url}`"  class="projet">
            <WidgetCardProject :projet="projet" />
          </NuxtLink>
        </CRT>
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

/*
.projet:hover {
  background: rgba(16, 10, 30, 0.9);
  box-shadow:
      inset 0 1px 0 rgba(0, 13, 255, 0.5),
      inset 0 -1px 0 rgba(192, 43, 226, 0.5);
  color: #e6d9ff;
}
*/

.projet:after, .projet:before {
  content: '\00a0';
  background-image:
      radial-gradient(at 50% 0, rgba(255, 0, 251, 0.5) 0%, rgba(0, 13, 255, 0.5) 60%, transparent 75%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  float:left;
  width:100%;
  position: absolute;
  transition: all 0.5s ease;
  opacity: 0;
}

.projet:hover {
  background-image:
      linear-gradient(
          to bottom,
          rgba(75, 54, 101, 0.08) 0%,
          rgba(187, 134, 252, 0.08) 50%,
          transparent 100%
      );
  background-size: 100% 4px;
  animation: scanlines 0.15s infinite;
}

@keyframes scanlines {
  from { background-position: 0 0; }
  to { background-position: 0 4px; }
}

.projet:hover:after, .projet:hover:before {
  opacity: 100%;
}

.projet:after {
  top:0;
}

.projet:before {
  bottom:-20px;
}


.projets-container {
  display:flex;
  flex-direction: column;
  gap:10px;
}

</style>