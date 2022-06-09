<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Seloncourt</span>
  </h1>

  <div class="grid place-items-center py-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5394.57721564487!2d6.85249505!3d47.4648051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47921b7d175e11a1%3A0xbc481dd7aca477f!2sTerrain%20de%20football!5e0!3m2!1sfr!2sfr!4v1654771982585!5m2!1sfr!2sfr"
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
          <a href="https://goo.gl/maps/eKRdjixnzSCiGdt1A">
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
  name: "SeloncourtView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




