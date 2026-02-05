<script setup lang="ts">
defineProps<{projet: Projet}>();
</script>

<template>
  <article>
    <NuxtLink :to="`/missions/${projet.url}`">
      <img src="/placeholder.png" alt="project illustration"/>
      <div class="content">
        <div>
          <h2>{{projet.titre}}</h2> <h3>- {{projet.role}}</h3>
        </div>
        <div class="infos">
          <div class="info">
            <p class="number">83</p>
            <p>membres</p>
          </div>
          <div class="info">
            <p class="number">83</p>
            <p>membres</p>
          </div>
          <div class="info">
            <p class="number">83</p>
            <p>membres</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
article {
  margin-top: 10px;
  width:100%;
  background: rgba(4, 4, 4, 0.49);
}

a {
  padding: 10px;
  display: flex;
  text-decoration: none;
}

article :hover {
  background: rgb(60, 60, 60);
}

img {
  width:20%;
}

.content {
  flex-grow:1;
}

h1, h2, h3 {
  display: inline;
  padding-left:10px;
}

h3 {
  color: rgba(113, 112, 112, 0.63);
}

.info {
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
}

.info p {
  margin: 0;
}

.infos {
  width: 100%;
  display:flex;
  flex-direction: row;
  gap: 10px;
  padding:10px;
}

.number {
  font-size: 14pt;
}
</style>