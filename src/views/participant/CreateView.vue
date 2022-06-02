<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="createParticipant">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Création participant</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input
                  class="form-control"
                  placeholder="Nom de la personne"
                  required
                  v-model="participant.nom"
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input
                  class="form-control"
                  placeholder="Prénom de la personne"
                  required
                  v-model="participant.prenom"
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    ref="file"
                    id="file"
                    @change="previewImage"
                  />
                  <label class="custom-file-label" for="file"
                    >Sélectionner l'image</label
                  >
                </div>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date naissance</span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  required
                  v-model="participant.naissance"
                  format="dd/mm/yyyy"
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Pays</span>
                </div>
                <select class="custom-select" v-model="participant.nationalite">
                  <option selected disabled>Sélectionner un Pays</option>
                  <option v-for="pays in listePays" :key="pays.nom">
                    {{ pays.nom }}
                  </option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Créer</button>
          <button class="btn btn-light float-right">
            <router-link to="/participants">Cancel</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
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
  name: "CreateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listePays: [], // Liste des pays pour la nationalité du participant
      participant: {
        // Le participant à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
        nationalite: null, // sa nationalité
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    this.getPays();
  },
  methods: {
    async getPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du pays par ordre croissant (asc)
      const q = query(dbPays, orderBy("nom", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listePays = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des pays", this.listePays);
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.participant.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createParticipant() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "participant/" + this.participant.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");

          // Création du participant sur le Firestore
          const db = getFirestore();
          const docRef = addDoc(
            collection(db, "participant"),
            this.participant
          );
        }
      );
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



