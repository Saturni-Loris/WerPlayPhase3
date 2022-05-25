<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Matchs</span> et
    <span class="text-orangewerplay">lieux</span> les plus répandus
  </h1>

  <div
    class="
      grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      hover:no-underline
    "
  >
    <div class="p-3 pt-12">
      <RouterLink to="/montbeliard"
        ><card
          rue="Avenue de Marc"
          adresse="Montbéliard"
          image="/public/amifoot.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/valentigney">
        <card
          rue="30 rue etienne oehmichen"
          adresse="Valentigney"
          image="/public/basket.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/Voujeaucourt">
        <card
          rue="Rue de la Paix"
          adresse="Voujeaucourt"
          image="/public/city.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/trevenans">
        <card rue="Rue Machéral" adresse="Trevenans" image="/public/basket.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/seloncourt">
        <card
          rue="Avenue de l'église"
          adresse="Seloncourt"
          image="/public/metundunk.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/bart">
        <card
          rue="Rue de la Moule"
          adresse="Bart"
          image="/public/panierbasket.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/audincourt">
        <card
          rue="Avenue des fleurs"
          adresse="Audincourt"
          image="/public/panierdebasket.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/hericourt">
        <card
          rue="Avenue de l'aveugle"
          adresse="Héricourt"
          image="/public/amifoot.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/delle">
        <card
          rue="Rue-Haute"
          adresse="Delle"
          image="/public/tapeballedefoot.png"
      /></RouterLink>
    </div>

    <div class="p-3 pt-12">
      <RouterLink to="/courcelle">
        <card
          rue="Avenue Basse"
          adresse="Courcelle"
          image="/public/passefoot.png"
      /></RouterLink>
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




