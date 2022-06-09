<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Montbéliard</span>
  </h1>

  <div class="grid place-items-center py-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43118.49996247028!2d6.772143879101559!3d47.511217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47921755d05728f5%3A0xb53def1b9af707fd!2sTerrain%20Chabaud!5e0!3m2!1sfr!2sfr!4v1654771417964!5m2!1sfr!2sfr"
      width="360"
      height="200"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="">
    <div class="flex items-center justify-center">
      <div class="px-4 md:flex">
        <div class="">
          <a href="https://goo.gl/maps/Xg4ttGujtpJongyM7">
            <button
              class="
                text-white
                float-right
                rounded-2xl
                bg-orangewerplay
                px-10
                py-2
                font-bold
              "
              type="button"
            >
              Terrain
            </button>
          </a>
        </div>
      </div>

      <div class="px-4 md:flex">
        <div class="">
          <a href="https://werplayalloweather.azurewebsites.net/">
            <button
              class="
                text-white
                float-right
                rounded-2xl
                bg-orangewerplay
                px-10
                py-2
                font-bold
              "
              type="button"
            >
              Météo
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../../components/card.vue";
export default {
  components: { card },
  name: "MontbeliardView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




