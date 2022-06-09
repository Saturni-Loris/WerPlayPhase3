<template>
  <div class="container">
    <div class="py-6">
      <div class="p-4">
        <hr class="bg-jaune my-2 border-t-2" />
        <h1 class="text-3xl font-bold text-orangewerplay">
          CREATION
          <span class="text-jaune">&</span> ACTIONS DES DIFFICULTES
        </h1>
        <h1 class="text-bleunuit py-4 text-sm font-medium">
          Ici, trouver nom et actions modifiables des difficultes participants à
          WerPlay
        </h1>
      </div>
    </div>

    <form class="flex items-center justify-center">
      <div class="input-group">
        <div class="input-group-prepend">
          <span
            class="
              input-group-text
              text-white
              rounded-l-lg
              border-2 border-rougewerplay
              bg-orangewerplay
            "
            >Nouvelle diffucultés</span
          >
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createdifficulte()"
          title="Création"
        >
          <i class="fa fa-save fa-lg"></i>
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span
                      class="
                        input-group-text
                        bg-white
                        rounded-l-lg
                        border-2 border-orangewerplay
                        px-4
                        font-semibold
                        text-orangewerplay
                      "
                      >Filtre difficultés</span
                    >
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form v-for="difficulte in filterByName" :key="difficulte.id">
                <div
                  class="flex justify-center py-2 sm:mx-10 md:mx-28 2xl:mx-10"
                >
                  <div class="input-group-prepend">
                    <span
                      class="
                        input-group-text
                        text-white
                        borde
                        rounded-l-lg
                        border-2 border-rougewerplay
                        bg-orangewerplay
                        px-4
                      "
                      >Nom du difficulte</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control rounded-none"
                    v-model="difficulte.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="updatedifficulte(difficulte)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="deletedifficulte(difficulte)"
                    title="Suppression"
                  >
                    <i class="fa fa-trash fa-lg"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "ListeView",
  data() {
    return {
      listedifficulte: [], // Liste des difficulte - collection difficulte Firebase
      nom: null, // Pour la création d'un nouveau difficulte
      filter: "",
    };
  },
  computed: {
    // Tri des difficulte par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des difficulte 2 à 2
      return this.listedifficulte.sort(function (a, b) {
        // Si le nom du difficulte est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom du difficulte est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrdifficulte de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrdifficulte seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrdifficulte de la propriété calculée de tri
        return this.orderByName.filter(function (difficulte) {
          // On ne renvoie que les paydifficultes dont le nom contient
          // la chaine de caractère du filtre
          return difficulte.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    // Montdifficulte de la vue
    // Appel de la liste des difficulte synchronisée
    this.getdifficulte();
  },
  methods: {
    async getdifficulte() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document difficulte
      const dbdifficulte = collection(firestore, "difficulte");
      // Liste des difficulte synchronisée
      const query = await onSnapshot(dbdifficulte, (snapshot) => {
        console.log("query", query);
        //  Récupération des résultats dans listedifficulteSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listedifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("listedifficulte", this.listedifficulte);
      });
    },

    async createdifficulte() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document difficulte
      const dbdifficulte = collection(firestore, "difficulte");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbdifficulte, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updatedifficulte(difficulte) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document difficulte
      // Reference du difficulte à modifier
      const docRef = doc(firestore, "difficulte", difficulte.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: difficulte.nom,
      });
    },

    async deletedifficulte(difficulte) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document difficulte
      // Reference du difficulte à supprimer
      const docRef = doc(firestore, "difficulte", difficulte.id);
      // Suppression du difficulte référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


