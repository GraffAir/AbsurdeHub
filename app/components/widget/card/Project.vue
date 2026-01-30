<script setup lang="ts">

</script>

<template>
  <article>
    <img src="/placeholder.png" alt="project illustration"/>
    <h2>Nom du projet</h2> <h3>- Product Owner</h3>
    <div class="info">
      <p>83</p>
      <p>membres</p>
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

.info {
  display:flex;
  flex-direction: column;
}
</style>