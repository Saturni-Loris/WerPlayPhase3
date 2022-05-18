<template>
      <h1 class="p-8 text-3xl font-bold"><span class="text-orangewerplay">Matchs</span> et <span class="text-orangewerplay">lieux</span> les plus répandus</h1>

  <div class="pt-12 p-3">
    <card />
  </div>

<div class="pt-12 p-3">
    <card />
  </div>

  <div class="pt-12 p-3">
    <card />
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




