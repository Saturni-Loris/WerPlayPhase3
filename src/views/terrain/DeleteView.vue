<template>
  <div class="container">
    <form enctype="multipart/form-data " @submit.prevent="deleteParticipant">
      <div class="card bg-dark">
        <div class="card-header bg-bleunuit">
          <h5 class="">Suppression d'un participant au festival</h5>
        </div>

        <div class="card-body bg-white">
          <div class="row">
            <div class="col-6">
              <div class="text-center">
                <img class="preview img-fluid" :src="photoActuelle" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-bleunuit"
                    >Nom</span
                  >
                </div>
                <input
                  class="form-control"
                  placeholder="Nom de la personne"
                  v-model="participant.nom"
                  disabled
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-bleunuit"
                    >Prénom</span
                  >
                </div>
                <input
                  class="form-control"
                  placeholder="Prénom de la personne"
                  v-model="participant.prenom"
                  disabled
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-bleunuit"
                    >Date naissance</span
                  >
                </div>
                <input
                  type="date"
                  class="form-control"
                  v-model="participant.naissance"
                  format="dd/mm/yyyy"
                  disabled
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-bleunuit"
                    >ville</span
                  >
                </div>
                <input
                  class="form-control"
                  v-model="participant.nationalite"
                  disabled
                />
              </div>
              <br />
            </div>
          </div>
          <br />
          <h5 class="alert alert-warning text-center" role="alert">
            Attention vous allez supprimer ce participant, cette action est
            irréversible !!
          </h5>
        </div>

        <div class="card-footer bg-white">
          <button
            type="submit"
            class="btn border-bleunuit text-bleunuit float-left"
          >
            Supprimer
          </button>
          <button class="btn text-white bg-bleunuit float-right">
            <RouterLink to="/participants ">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteView",
  data() {
    return {
      participant: {
        // Le participant à créer
        nom: null, // son nom
        prenom: null, // son prénom
        photo: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
        nationalite: null, // sa nationalité
      },

      refParticipant: null, // Référence du participant à modifier
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    //console.log("id participant", this.$route.params.id);
    // Recherche participant concerné
    this.getParticipant(this.$route.params.id);
  },

  methods: {
    async getParticipant(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "participant", id);
      // Référence du participant concerné
      this.refParticipant = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refParticipant.exists()) {
        // Si oui on récupère ses données
        this.participant = this.refParticipant.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.participant.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Participant inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "participant/" + this.participant.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteParticipant() {
      const firestore = getFirestore();
      // Suppresion du participant
      await deleteDoc(doc(firestore, "participant", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "participant/" + this.participant.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/participants");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>


