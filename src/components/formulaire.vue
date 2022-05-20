<template>
  <!-- component -->
  <form class="items-center justify-center p-8">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
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
          for="grid-first-name"
        >
          Nom*
        </label>
        <input
          class="
            bg-gray-200
            text-gray-700
            focus:bg-white
            mb-3
            block
            w-full
            appearance-none
            rounded
            border-2 border-orangewerplay
            py-3
            px-4
            leading-tight
            focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Arthur"
        />
        <p class="text-xs italic">*champs obligatoire</p>
      </div>
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
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
          for="grid-first-name"
        >
          Prénom*
        </label>
        <input
          class="
            bg-gray-200
            text-gray-700
            focus:bg-white
            mb-3
            block
            w-full
            appearance-none
            rounded
            border-2 border-orangewerplay
            py-3
            px-4
            leading-tight
            focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Saturni"
        />
        <p class="text-xs italic">*champs obligatoire</p>
      </div>

      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
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
          for="grid-first-name"
        >
          E-mail*
        </label>
        <input
          class="
            bg-gray-200
            text-gray-700
            focus:bg-white
            mb-3
            block
            w-full
            appearance-none
            rounded
            border-2 border-orangewerplay
            py-3
            px-4
            leading-tight
            focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="arthursatuni@gmail.com"
        />
        <p class="text-xs italic">*champs obligatoire</p>
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
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
          Votre message
        </label>
        <textarea
          class="
            no-resize
            text-gray-700
            mb-3
            block
            h-48
            w-full
            resize-none
            appearance-none
            rounded
            border-2 border-orangewerplay
            py-3
            px-4
            leading-tight
          "
          id="message"
        ></textarea>
      </div>
    </div>

    <div class="md:flex md:items-center">
      <div class="">
        <button
          class="text-white rounded bg-orangewerplay py-2 px-16 font-bold"
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
            <label class="mt-1 inline-flex text-left text-xs">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5"
                checked
              /><span class="ml-2">J’ai compris et j’accepte (1)</span>
            </label>
          </div>
        </div>
      </div>

      <p class="text-xs italic">
        (1) En communiquant mes informations, je consens à être recontacté par
        voie électronique par WerPlay. Ces données seront conservées durant 30
        jours afin de pouvoir traiter au mieux ma demande. Je pourrai faire
        modifier ou supprimer mes informations sur simple demande. En savoir
        plus.
      </p>
    </div>
  </form>
</template>