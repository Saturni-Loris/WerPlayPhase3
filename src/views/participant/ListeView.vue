<template>
  <div class="card my-4 mx-2">
    <h1 class="text-dark p-8 text-3xl font-bold">
      <span class="text-orangewerplay">Créer</span> vos
      <span class="text-orangewerplay"> match ici</span>
    </h1>

    <div v-if="user == null">
      <h6 class="alert alert-warning text-center" role="alert">
        Vous devez être connecté pour créér un match !!
      </h6>

      <div class="flex flex-col items-center justify-center p-8">
        <div class="">
          <button
            class="
              text-white
              md:w-62
              rounded-2xl
              bg-orangewerplay
              py-2
              px-16
              font-bold
              lg:w-72
            "
            type="button"
          >
            <RouterLink
              class="hover:text-rougewerplay hover:no-underline"
              to="/moncompte"
              >Créer un compte</RouterLink
            >
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="flex flex-col items-center justify-center p-8">
        <div class="">
          <RouterLink to="/CreateParticipant">
            <button
              class="
                text-white
                md:w-62
                rounded-2xl
                bg-orangewerplay
                py-2
                px-16
                font-bold
                lg:w-72
              "
              type="button"
            >
              Créer un match
            </button></RouterLink
          >
        </div>
      </div>

      <div class="card-header text-white bg-orangewerplay">
        <h5>Liste des matchs</h5>
      </div>

      <div class="card-body table-responsive">
        <table class="table text-rougewerplay">
          <thead>
            <tr>
              <th scope="col" class="text-center">Terrain</th>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">Sport</th>
              <th scope="col">RDV le</th>
              <th scope="col">Age</th>
              <th scope="col">Difficulté</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="part in listeParticipant" :key="part.id">
              <td class="text-center">
                <img
                  class="media-object imageSmall"
                  :src="part.photo"
                  :alt="part.prenom + ' ' + part.nom"
                />
              </td>
              <td>
                <b>{{ part.nom }}</b>
              </td>

              <td>{{ part.nationalite }}</td>

              <td>{{ part.sport }}</td>

              <td>{{ dateFr(part.naissance) }}</td>

              <td>{{ part.age }}</td>

              <td>{{ part.difficulte }}</td>
              <td>
                <span title="Supprimer le participant" class="mr-2">
                  <RouterLink
                    :to="{ name: 'DeleteParticipant', params: { id: part.id } }"
                  >
                    <i class="fa fa-times fa-lg text-rougewerplay"></i>
                  </RouterLink>
                </span>
                <span title="Modifier le participant" class="mr-2">
                  <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                  <RouterLink
                    :to="{ name: 'UpdateParticipant', params: { id: part.id } }"
                  >
                    <i class="fa fa-edit fa-lg text-rougewerplay"></i>
                  </RouterLink>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="pt-52"></div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  name: "ListeView",
  data() {
    return {
      user: null, // User connecté
      listeParticipant: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getParticipants();
    // Appel de la liste des users (Firestore)
    this.getUsers();
  },
  methods: {
    // Les fonctions
    // obtenir les utilisateurs de users
    async getUsers() {
      // Obtenir les inofrmations du user connecté
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
          }
        }.bind(this)
      );
    },

    async getParticipants() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "participant");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeParticipant = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeParticipant.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "participant/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>

<style scoped>
</style>


