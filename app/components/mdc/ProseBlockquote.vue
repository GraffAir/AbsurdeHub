<template>
  <blockquote class="retro-blockquote">
    <slot />
  </blockquote>
</template>

<style scoped>
.retro-blockquote {
  background-color: #100a1e;
  border-left: 4px solid #8a2be2;
  padding: 1rem;
  margin: 1.5rem 0;
  position: relative;
  color: #b19cd9;
  font-family: 'Courier New', monospace;
  background-image:
      linear-gradient(rgba(138, 43, 226, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(138, 43, 226, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  text-shadow: 0 0 3px rgba(187, 134, 252, 0.4);
  line-height: 1.6;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
}

.retro-blockquote::before {
  content: "≫";
  position: absolute;
  left: -15px;
  top: 0;
  color: #8a2be2;
  font-weight: bold;
}

.retro-blockquote:hover {
  background-color: #1a0f2d;
  color: #e6d9ff;
  text-shadow: 0 0 6px rgba(187, 134, 252, 0.7);
  border-left: 4px solid #9d4edd;
}

.retro-blockquote:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      linear-gradient(
          to bottom,
          rgba(187, 134, 252, 0.08) 0%,
          rgba(187, 134, 252, 0.08) 50%,
          transparent 100%
      );
  background-size: 100% 4px;
  pointer-events: none;
  animation: scanlines 0.15s infinite;
}

@keyframes scanlines {
  from { background-position: 0 0; }
  to { background-position: 0 4px; }
}
</style>
