<template>
  <h2 class="retro-h2">
    <slot />
  </h2>
</template>

<style scoped>
.retro-h2 {
  color: #b19cd9;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  font-size: 1.8rem;
  margin: 1.8rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(138, 43, 226, 0.3);
  text-shadow: 0 0 2px rgba(187, 134, 252, 0.3);
  position: relative;
  display: inline-block;
}
.retro-h2::before {
  content: "≫";
  color: #8a2be2;
  margin-right: 0.5rem;
}
</style>
