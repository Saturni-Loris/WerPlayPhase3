<template>
  <div class="card my-4 mx-2">
    <div class="card-header text-white bg-orangewerplay">
      <h5>
        Liste des terrains de sports
        <span class="float-right" title="Créer un nouveau terrain">
          <router-link to="/createTerrain">
            <i class="fa fa-plus fa-lg text-light"></i>
          </router-link>
        </span>
      </h5>
    </div>

    <div class="card-body table-responsive">
      <table class="table text-rougewerplay">
        <thead>
          <tr>
            <th scope="col" class="text-center">Terrain</th>
            <th scope="col">Adresse</th>
            <th scope="col">Ville</th>
            <th scope="col">Sport</th>
            <th scope="col">Créé le</th>
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
          </tr>
        </tbody>
      </table>
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

export default {
  name: "ListeView",
  data() {
    return {
      listeParticipant: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getParticipants();
  },
  methods: {
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


