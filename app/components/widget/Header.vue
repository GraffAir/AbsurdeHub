<script setup lang="ts">
defineProps<{titre: string}>();
</script>

<template>
  <div class="header">
    <h2>{{titre}}</h2>
    <p>➜</p>
  </div>
</template>

<style scoped>
.header {
  display:flex;
  justify-content: space-between;
  width:100%;
}
</style>