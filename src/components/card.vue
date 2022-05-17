<template>
  <figure class="flex flex-col">
    <img
      class="rounded-t-lg"
      src="../assets/basket_photo.png"
      alt="Image maison"
    />
    <figcaption class="relative rounded-b-lg border-x-2 border-b-2 px-5 py-7">
      <div class="relative flex flex-col">
        <div class="order-first flex items-center pb-1">
          <h3 class="pr-4 text-2xl font-bold leading-8 text-red-600">
            Montbéliard, 25200
          </h3>
          <etoilevide />

          <coeur />
          <coeur />
          <coeur />
        </div>
        <h3 class="text-m mr-1 font-semibold leading-8 text-gray-400 underline">
          S’y rendre
        </h3>
        <h3 class="text-base leading-8 text-gray-400">7 Rue du Mont Bart</h3>
        <hr class="my-2 border-t-2 text-gray-400" />
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

export default {
  components: { Football, Basket, Volley },
};
</script>

