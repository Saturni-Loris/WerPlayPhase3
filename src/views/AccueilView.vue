<template>
    <div class="pb-12">
        <h1 class="p-8 text-3xl font-bold"><span class="text-orangewerplay">Bienvenue</span> sur <span class="text-orangewerplay">WerPlay</span></h1>
        <h1 class="pr-8 pl-8 text-sm font-medium">Ici, tu pourras jouer à des sports co' quand tu veux. Avec qui tu veux et quand tu veux! Football, Basket ou encore Volley, WerPlay te permettra de créer ou rejoindre des matchs sans prises de têtes.</h1>
    </div>

    <div class="p-3">
        <card />
    </div>

    <div class="pb-12">
        <h1 class="p-8 text-3xl font-bold"><span class="text-orangewerplay">Des question</span> ? </h1>

        <img
      class=""
      src="../assets/desquestionsphotos.png"
      alt="Image foot"
    />

    <div class="md:flex md:items-center mt-10">
    <div class="">
      <button class="  bg-orangewerplay  text-white font-bold py-2 px-16 rounded" type="button">
        Ecrivez-nous
      </button>
    </div>
    <div class="md:w-2/3"></div>
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



