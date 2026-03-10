<template>
  <p class="retro-p">
    <slot />
  </p>
</template>

<style scoped>
.retro-p {
  color: #dcd9e6;
  font-family: 'Courier New', monospace;
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0 0 1.2rem;
  padding: 0.3rem 0;
  text-shadow: 0 0 1px rgba(187, 134, 252, 0.15);
  background-image:
      linear-gradient(rgba(138, 43, 226, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(138, 43, 226, 0.01) 1px, transparent 1px);
  background-size: 100% 20px, 20px 100%;
  hyphens: auto;
}
</style>
