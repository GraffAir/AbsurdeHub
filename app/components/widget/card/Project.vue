<script setup lang="ts">
defineProps<{nomProjet: String}>();
</script>

<template>
  <article>
    <img src="/placeholder.png" alt="project illustration"/>
    <div class="content">
      <div>
        <h2>{{nomProjet}}</h2> <h3>- Product Owner</h3>
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
  </article>
</template>

<style scoped>
article {
  padding: 10px;
  display: flex;
  width:40%;
  background:grey;

}

img {
  width:20%;
}

.content {
  flex-grow:1;
}

h1, h2, h3 {
  display: inline;
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