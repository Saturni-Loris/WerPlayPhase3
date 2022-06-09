<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Valentigney</span>
  </h1>

  <div class="grid place-items-center py-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2237624361236!2d6.834780829229969!3d47.47064999869849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479210a597a0a567%3A0xaf160a24420e6430!2sAll.%20de%20Normandie%2C%2025700%20Valentigney!5e1!3m2!1sfr!2sfr!4v1653391843121!5m2!1sfr!2sfr"
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
          <a
            href="https://maps.google.com/maps/dir//All.+de+Normandie+25700+Valentigney/@47.47065,6.835328,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x479210a597a0a567:0xaf160a24420e6430"
          >
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
  name: "ValentigneyView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




