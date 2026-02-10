<script setup lang="ts">

</script>

<template>
  <main>
    <section>
      <div class="profil-top">
        <img src="/images/moi-chapeau.jpeg" alt="rafaël avec chapeau haut de forme et lunettes steampunk" />
        <div>
          <h1>Rafaël Graff</h1>
          <p><span class="reverse-colors">Nom de code</span> HumainAbsurde</p>
          <p>Créateur, développeur et concepteur avec une appétence pour la gestion de projet.</p>
        </div>
      </div>
      <p>


        J'ai toujours été de nature à initier et porter des projets moi-même, à innover, à créer des expériences.
        Ça va donc sans dire que, quand j'ai été introduit à l'informatique enfant,
        la programmation et aux possibilités infinies que cela permettait, j'ai tout de suite été conquis.
      </p>
      <p>
        Des années plus tard, cette passion ne s'est pas arrêtée, au contraire.
        J'ai intégré l'IUT Montpellier-Sète en BUT Informatique spécialité management du système d'information,
        cherchant à mettre la <strong>gestion de projet</strong> et l'informatique au cœur de mon projet professionnel.
        Post-BUT, je vise une poursuite d'études dans une formation liée au management.
      </p>
      <p>
        Aujourd'hui, je cherche à continuer cette passion pour l'informatique dans le cadre d'un stage ou d'une alternance,
        particulièrement dans des domaines liées à la gestion de projet ou au management du système d'information.
      </p>
    </section>
    <section>
      <WidgetVedette />
    </section>
  </main>

</template>

<style>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 1%;
  margin: 40px;
}

main section {
  min-width: 500px;
  width: 45%;
}

.profil-top {
  display: flex;
  gap:10px;
}

.profil-top > img {
  border-radius: 100%;
}

.reverse-colors {
  color:var(--background-color);
  background-color:var(--text-color);
  padding: 5px 20px;
  margin-right: 10px;
}
</style>