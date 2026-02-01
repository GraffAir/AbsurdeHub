<template>
  <div>
    <div class="titre">
      <p class="titre-nom">Rafaël Graff</p>
      <h1>Créer du sens<br/> dans l&apos;<span class="titre-accent">absurde</span></h1>
      <div class="titre-boutons">
        <BoutonTitre to="/profil" texte="Commencer l'expédition"/>
        <BoutonTitre to="/profil" texte="Mon profil" />
        <BoutonTitre to="/profil" texte="Mes missions" />
      </div>
    </div>


  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
h1 {
  font-size:52pt;
  font-family: 'Boldonse', sans-serif;
}

.titre {
  padding-top:10%;
  padding-left:10%;
  color:white;
  z-index:2;
}

.titre-accent {
  font-weight: 900;
  color: var(--accent-color);
}

.titre-boutons {
  margin-top:5vh;
}


</style>