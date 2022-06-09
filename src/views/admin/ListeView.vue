<template>
  <div class="container">
    <div class="py-6">
      <div class="p-4">
        <hr class="bg-jaune my-2 border-t-2" />
        <h1 class="text-3xl font-bold text-orangewerplay">
          CREATION
          <span class="text-jaune">&</span> ACTIONS DES VILLES
        </h1>
        <h1 class="text-bleunuit py-4 text-sm font-medium">
          Ici, trouver nom et actions modifiables des ville participants à
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
            >Nom de la nouvelle ville</span
          >
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createVille()"
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
                      >Filtrage</span
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
              <form v-for="ville in filterByName" :key="ville.id">
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
                      >Nom de la ville</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control rounded-none"
                    v-model="ville.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="updateVille(ville)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="deleteVille(ville)"
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
      listeVille: [], // Liste des ville - collection ville Firebase
      nom: null, // Pour la création d'un nouveau ville
      filter: "",
    };
  },
  computed: {
    // Tri des ville par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des ville 2 à 2
      return this.listeVille.sort(function (a, b) {
        // Si le nom du ville est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom du ville est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (ville) {
          // On ne renvoie que les payvilles dont le nom contient
          // la chaine de caractère du filtre
          return ville.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des ville synchronisée
    this.getVille();
  },
  methods: {
    async getVille() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      const dbVille = collection(firestore, "ville");
      // Liste des ville synchronisée
      const query = await onSnapshot(dbVille, (snapshot) => {
        //console.log("query", query);
        //  Récupération des résultats dans listeVilleSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeVille = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("listeville", this.listeville);
      });
    },

    async createVille() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      const dbVille = collection(firestore, "ville");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbVille, {
        nom: this.nom,
      });
      //console.log("document créé avec le id : ", docRef.id);
    },

    async updateVille(ville) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      // Reference du ville à modifier
      const docRef = doc(firestore, "ville", ville.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: ville.nom,
      });
    },

    async deleteVille(ville) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      // Reference du ville à supprimer
      const docRef = doc(firestore, "ville", ville.id);
      // Suppression du ville référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


