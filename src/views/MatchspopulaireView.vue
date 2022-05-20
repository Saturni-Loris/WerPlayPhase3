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
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="30 rue etienne michen"
        adresse="Valentigney"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue de la Paix"
        adresse="Voujeaucourt"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue Machéral"
        adresse="Trevenans"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue de l'église"
        adresse="Seloncourt"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Rue de la Moule"
        adresse="Bart"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue des fleurs"
        adresse="Audincourt"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue de l'aveugle"
        adresse="Héricourt"
        image="/public/dunkbasket.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card rue="Rue-Haute" adresse="Delle" image="/public/dunkbasket.png" />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue Basse"
        adresse="Courcelle"
        image="/public/citylure.png"
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




