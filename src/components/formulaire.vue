<template>
<!-- component -->
<form class="w-full max-w-lg p-4">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nom*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-orangewerplay rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Arthur">
      <p class="text-xs italic">*champs obligatoire</p>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Prénom*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-orangewerplay rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Saturni">
      <p class="text-xs italic">*champs obligatoire</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        E-mail*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-orangewerplay rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="arthursaturni@gmail.com">
      <p class="text-xs italic">*champs obligatoire</p>
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Votre message
      </label>
      <textarea class=" no-resize appearance-none block w-full text-gray-700 border-2 border-orangewerplay rounded py-3 px-4 mb-3 leading-tight  h-48 resize-none" id="message"></textarea>
    </div>
  </div>
  
  <div class="md:flex md:items-center">
    <div class="">
      <button class="  bg-orangewerplay  text-white font-bold py-2 px-16 rounded" type="button">
        Envoyer
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <div class="flex flex-col ">
            <div class="flex flex-col py-6">
                    <label class="mt-1 inline-flex text-xs text-left  ">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " checked /><span
                        class="ml-2 "
                        >J’ai compris et j’accepte (1)</span
                    >
                    </label>
            </div>
            </div>
        </div>
      
      <p class="text-xs italic">(1) En communiquant mes informations, je consens à être recontacté par voie électronique par WerPlay. Ces données seront conservées durant 30 jours afin de pouvoir traiter au mieux ma demande. Je pourrai faire modifier ou supprimer mes informations sur simple demande. En savoir plus.</p>
</div>
  
</form>








</template>