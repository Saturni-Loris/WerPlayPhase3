<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Matchs</span> et
    <span class="text-orangewerplay">lieux</span> les plus répandus
  </h1>

  <div
    class="
      grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
    "
  >
    <div class="p-3 pt-12">
      <card
        rue="Avenue de Marc"
        adresse="Montbéliard"
        image="/public/amifoot.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="30 rue etienne michen"
        adresse="Valentigney"
        image="/public/basket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue de la Paix"
        adresse="Voujeaucourt"
        image="/public/city.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card rue="Rue Machéral" adresse="Trevenans" image="/public/basket.png" />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue de l'église"
        adresse="Seloncourt"
        image="/public/metundunk.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue de la Moule"
        adresse="Bart"
        image="/public/panierbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue des fleurs"
        adresse="Audincourt"
        image="/public/panierdebasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue de l'aveugle"
        adresse="Héricourt"
        image="/public/amifoot.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue-Haute"
        adresse="Delle"
        image="/public/tapeballedefoot.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue Basse"
        adresse="Courcelle"
        image="/public/passefoot.png"
      />
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";

export default {
  components: { card },
  name: "MatchspopulaireView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




