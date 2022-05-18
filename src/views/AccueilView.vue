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
      class="grid place-items-center"
      src="../assets/desquestionsphotos.png"
      alt="Image foot"
    />

    <div class="md:flex md:items-center -mt-16 pl-8">
    <div class="">
      <button class="  bg-orangewerplay  text-white font-bold py-2 px-16 rounded-2xl" type="button">
        <RouterLink to="/contact">Ecrivez nous</RouterLink>
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
    </div>

    <div class="pb-4 ">
        <h1 class="p-8 text-3xl font-bold text-rougewerplay text-center">Abonnes-toi pour ne rien manquer !</h1>
        <h1 class="pr-8 pl-8 text-sm font-medium text-center">Abonnes-toi pour recevoir toutes les actualités et news de WerPlay en avant-première!</h1>
    </div>

    <form class="items-center justify-center p-8"> 
  <div class="">
    <div class="">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        E-mail*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-orangewerplay rounded py-3 px-4 mb-3" id="email" type="email" placeholder="arthursaturni@gmail.com">
      <p class="text-xs italic pb-4">*champs obligatoire</p>
    </div>
  </div>
  
 
  
  <div class="md:flex md:items-center">
    <div class="">
      <button class=" bg-orangewerplay float-right text-white font-bold py-2 px-16 rounded-2xl " type="button">
        Envoyer
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <div class="flex flex-col ">
            <div class="flex flex-col py-6">
                    <label class="mt-16 inline-flex text-xs text-left  ">
                    <input type="checkbox" class="form-checkbox h-5 w-5" checked /><span
                        class="ml-2 "
                        >J’ai compris et j’accepte (1)</span
                    >
                    </label>
            </div>
            </div>
        </div>
      
</div>

      <p class="text-xs text-griswerplay italic">(1) En communiquant mes informations, je consens à être recontacté par voie électronique par WerPlay. Ces données seront conservées durant 30 jours afin de pouvoir traiter au mieux ma demande. Je pourrai faire modifier ou supprimer mes informations sur simple demande. En savoir plus.</p>

  
</form>

    <div class="grid place-items-center">
        <img
      class="p-8"
      src="../assets/basketpanier.png"
      alt="Image foot" 
    /></div>
    
    <div class="pb-12">
            <h1 class="p-8 text-3xl font-bold text-center"><span class="text-orangewerplay">Et</span> maintenant ?</h1>
            <h1 class="pr-8 pl-8 text-sm font-medium text-center">On attent quoi pour rejoindre un match ?</h1> 

            <div class="flex flex-col 
                    items-center justify-center p-8">
    <div class="">
      
      <button class="  bg-orangewerplay text-white font-bold py-2 px-16 rounded-2xl  md:w-12 lg:w-52" type="button">
        <RouterLink to="/matchspopulaire">Rejoindre un match</RouterLink>
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



