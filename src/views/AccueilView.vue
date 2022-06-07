<template>
  <div class="pb-12">
    <h1 class="p-8 text-3xl font-bold">
      <span class="text-orangewerplay">Bienvenue</span> sur
      <span class="text-orangewerplay">WERPLAY</span>
    </h1>
    <h1 class="pr-8 pl-8 text-sm font-medium">
      Ici, tu pourras jouer à des sports co' quand tu veux. Avec qui tu veux et
      quand tu veux! Football, Basket ou encore Volley, WerPlay te permettra de
      créer ou rejoindre des matchs sans prises de têtes.
    </h1>
  </div>
  <div
    class="
      grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
    "
  >
    <div class="p-3 pt-12">
      <card
        rue="Avenue de l'église"
        adresse="Seloncourt"
        image="/metundunk.png"
      />
    </div>

    <div class="p-3 pt-12">
      <card rue="Rue de la Moule" adresse="Bart" image="/panierbasket.png" />
    </div>

    <div class="p-3 pt-12">
      <card
        rue="Avenue des fleurs"
        adresse="Audincourt"
        image="/panierdebasket.png"
      />
    </div>
  </div>

  <div class="pb-12">
    <h1 class="p-8 text-3xl font-bold">
      <span class="text-orangewerplay">Des questions</span> ?
    </h1>
    <div class="grid place-items-center">
      <img src="../assets/desquestionsphotos.png" alt="Image foot" />

      <div class="-mt-16 pr-40 md:flex">
        <div class="mb-3 flex rounded-lg p-1 text-xl font-semibold">
          <button
            class="text-white rounded-2xl bg-orangewerplay py-2 px-16 font-bold"
            type="button"
          >
            <RouterLink to="/contact">Ecrivez nous</RouterLink>
          </button>
        </div>
      </div>

      <div class="md:w-2/3"></div>
    </div>
  </div>

  <div class="pb-4">
    <h1 class="p-8 text-center text-3xl font-bold text-rougewerplay">
      Abonnes-toi pour ne rien manquer !
    </h1>
    <h1 class="pr-8 pl-8 text-center text-sm font-medium">
      Abonnes-toi pour recevoir toutes les actualités et news de WerPlay en
      avant-première!
    </h1>
  </div>

  <form class="items-center justify-center p-8">
    <div class="">
      <div class="">
        <label
          class="
            text-gray-700
            mb-2
            block
            text-xs
            font-bold
            uppercase
            tracking-wide
          "
        >
          E-mail*
        </label>
        <input
          class="
            bg-gray-200
            text-gray-700
            mb-3
            block
            w-full
            appearance-none
            rounded
            border-2 border-orangewerplay
            py-3
            px-4
          "
          id="email"
          type="email"
          placeholder="arthursaturni@gmail.com"
        />
        <p class="pb-4 text-xs italic">*champs obligatoire</p>
      </div>
    </div>

    <div class="md:flex md:items-center">
      <div class="">
        <button
          class="
            text-white
            float-right
            rounded-2xl
            bg-orangewerplay
            py-2
            px-16
            font-bold
          "
          type="button"
        >
          Envoyer
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <div class="flex flex-col">
          <div class="flex flex-col py-6">
            <label class="mt-16 inline-flex text-left text-xs">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5"
                checked
              /><span class="ml-2">J’ai compris et j’accepte (1)</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <p class="text-xs italic text-griswerplay">
      (1) En communiquant mes informations, je consens à être recontacté par
      voie électronique par WerPlay. Ces données seront conservées durant 30
      jours afin de pouvoir traiter au mieux ma demande. Je pourrai faire
      modifier ou supprimer mes informations sur simple demande. En savoir plus.
    </p>
  </form>

  <div class="grid place-items-center">
    <img class="p-8" src="../assets/basketpanier.png" alt="Image foot" />
  </div>

  <div class="pb-12">
    <h1 class="p-8 text-center text-3xl font-bold">
      <span class="text-orangewerplay">Et</span> maintenant ?
    </h1>
    <h1 class="pr-8 pl-8 text-center text-sm font-medium">
      On attent quoi pour rejoindre un match ?
    </h1>

    <div class="flex flex-col items-center justify-center p-8">
      <div class="">
        <button
          class="
            text-white
            rounded-2xl
            bg-orangewerplay
            py-2
            px-16
            font-bold
            md:w-12
            lg:w-52
          "
          type="button"
        >
          <RouterLink to="/matchspopulaire">Rejoindre un match</RouterLink>
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center p-8">
      <div class="">
        <button
          class="
            rounded-2xl
            border-2 border-orangewerplay
            py-2
            px-16
            font-bold
            text-orangewerplay
            md:w-12
            lg:w-52
          "
          type="button"
        >
          <RouterLink to="/terrain">Créer un match</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template> 



<script>
import card from "../components/card.vue";

export default {
  components: { card },
  name: "Accueil View",
  data() {
    return {};
  },
};
</script>



