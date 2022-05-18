<template>





  <figure class="flex flex-col ">
    <div class="flex flex-col  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img class="object-cover w-full " src="../assets/citylure.png" alt="Flower and sky"/>

	<div class="absolute bottom-0 right-0 px-6 py-4 ">
	  <h4 class="flex mb-3 text-xl font-semibold tracking-tight text-dark bg-white rounded-lg p-1">
      <etoilevide />

          <etoilevide />
          <etoile />
          <etoile />
    </h4>
	</div>
</div>
</div>
    
    <figcaption class="relative rounded-b- border-x-2 border-b-2 border-griswerplay px-4 py-8 ">
      <div class="relative flex flex-col">
        <div class="order-first flex items-center pb-4">
          <h3 class="pr-8 text-2xl font-bold leading-8 text-rougewerplay ">
            Lure, 70200
          </h3>
          
        </div>
        <h3 class="text-m mr-1 font-semibold leading-8 text-gray-400 underline">
          S’y rendre
        </h3>
        <h3 class="text-base leading-8 text-gray-400">Rue des fleurs</h3>
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

