<template>
  <h1 class="p-8 text-3xl font-bold">
    <span class="text-orangewerplay">Voujeaucourt</span>
  </h1>

  <div class="grid place-items-center py-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86296.47410552965!2d6.697834158203132!3d47.47501230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479211460606fd7f%3A0x78df55bc846a9171!2sStade!5e0!3m2!1sfr!2sfr!4v1654772106430!5m2!1sfr!2sfr"
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
          <a href="https://goo.gl/maps/v8j9Fb1Hvumtp4Rz8">
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
  name: "VoujeaucourtView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




