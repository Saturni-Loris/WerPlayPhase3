<template>
  <figure class="flex flex-col">
    <div
      class="
        flex
        w-full
        grid-cols-1
        flex-col
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <div class="relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
        <img
          class="w-full object-cover"
          src="../assets/basket_photo.png"
          alt="Flower and sky"
        />

        <div class="absolute bottom-0 right-0 px-6 py-4">
          <h4
            class="
              text-dark
              bg-white
              mb-3
              flex
              rounded-lg
              p-1
              text-xl
              font-semibold
              tracking-tight
            "
          >
            <etoilevide />

            <etoile />
            <etoile />
            <etoile />
          </h4>
        </div>
      </div>
    </div>

    <figcaption
      class="
        rounded-b-
        relative
        border-x-2 border-b-2 border-griswerplay
        px-4
        py-8
      "
    >
      <div class="relative flex flex-col">
        <div class="order-first flex items-center pb-4">
          <h3 class="pr-8 text-2xl font-bold leading-8 text-rougewerplay">
            Montbéliard, 25200
          </h3>
        </div>
        <h3 class="text-m text-gray-400 mr-1 font-semibold leading-8 underline">
          S’y rendre
        </h3>
        <h3 class="text-gray-400 text-base leading-8">Rue du Mont Bart</h3>
        <hr class="my-2 border-griswerplay" />
        <div class="flex justify-between text-sm font-normal">
          <div><football class="inline-block align-top" /> Football</div>
          <div><basket class="inline-block align-top" /> Basket</div>
          <div>
            <volley class="border-indigo-100 inline-block align-top" /> Volley
          </div>
        </div>
      </div>
    </figcaption>
  </figure>
</template>


<script>
import Football from "./Football.vue";
import Basket from "./Basket.vue";
import Volley from "./Volley.vue";
import Etoile from "./Etoile.vue";
import Etoilevide from "./Etoilevide.vue";

export default {
  components: { Football, Basket, Volley, Etoile, Etoilevide },
};
</script>

