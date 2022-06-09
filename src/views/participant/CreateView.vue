<template>
  <div class="container my-4">
    <h1>
      <div class="pb-6">
        <div class="card-header text-white bg-orangewerplay">
          <h5 class="">Création d'un terrain</h5>
        </div>
      </div>
    </h1>

    <form enctype="multipart/form-data" @submit.prevent="createParticipant">
      <div class="flex items-center justify-center pb-4">
        <div>
          <img class="preview img-fluid" :src="imageData" />
        </div>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >Terrain</span
          >
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
          <span class="input-group-text text-white bg-orangewerplay"
            >Adresse</span
          >
        </div>
        <input
          class="form-control"
          placeholder="Adresse"
          v-model="participant.nom"
          required
        />
      </div>
      <br />
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >RDV le</span
          >
        </div>
        <input
          type="date"
          class="form-control"
          v-model="participant.naissance"
          format="dd/mm/yyyy"
          required
        />
      </div>

      <br />

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >Catégorie d'âge</span
          >
        </div>
        <select class="custom-select" v-model="participant.age">
          <option selected disabled>
            Sélectionner la catégorie d'âge accepté
          </option>
          <option v-for="age in listeage" :key="age.nom">
            {{ age.nom }}
          </option>
        </select>
      </div>

      <br />

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >Difficulté</span
          >
        </div>
        <select class="custom-select" v-model="participant.difficulte">
          <option selected disabled>Sélectionner la difficulté du match</option>
          <option v-for="difficulte in listedifficulte" :key="difficulte.nom">
            {{ difficulte.nom }}
          </option>
        </select>
      </div>

      <br />

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >Ville</span
          >
        </div>
        <select class="custom-select" v-model="participant.nationalite">
          <option selected disabled>Sélectionner une ville</option>
          <option v-for="ville in listeville" :key="ville.nom">
            {{ ville.nom }}
          </option>
        </select>
      </div>
      <br />

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text text-white bg-orangewerplay"
            >Sport</span
          >
        </div>
        <select class="custom-select" v-model="participant.sport">
          <option selected disabled>Sélectionner une ville</option>
          <option v-for="sport in listesport" :key="sport.nom">
            {{ sport.nom }}
          </option>
        </select>
      </div>

      <div class="pt-10">
        <button
          type="submit"
          class="
            btn
            float-left
            border-2 border-orangewerplay
            text-orangewerplay
          "
        >
          Créer
        </button>
        <button class="btn float-right bg-orangewerplay">
          <router-link to="/participants">Annuler</router-link>
        </button>
      </div>
    </form>
  </div>

  <div class="pb-12"></div>
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
      listeville: [], // Liste des ville pour la nationalité du participant
      listesport: [], // Liste des sport pour la nationalité du participant
      listeage: [], // Liste des age
      listedifficulte: [], // Liste des difficulte

      participant: {
        // Le participant à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
        nationalite: null, // sa nationalité
        sport: null, // sa nationalité
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des ville
    this.getville();
    // Appel de la liste des sport
    this.getsport();
    // Appel de la liste des age
    this.getage();
    // Appel de la liste des difficulte
    this.getdifficulte();
  },
  methods: {
    async getville() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      const dbville = collection(firestore, "ville");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du ville par ordre croissant (asc)
      const q = query(dbville, orderBy("nom", "asc"));
      // Récupération de la liste des ville à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeville = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des ville", this.listeville);
      });
    },

    async getsport() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document sport
      const dbsport = collection(firestore, "sport");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du sport par ordre croissant (asc)
      const q = query(dbsport, orderBy("nom", "asc"));
      // Récupération de la liste des sport à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listesport = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des sport", this.listesport);
      });
    },

    async getdifficulte() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document difficulte
      const dbdifficulte = collection(firestore, "difficulte");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du sport par ordre croissant (asc)
      const q = query(dbdifficulte, orderBy("nom", "asc"));
      // Récupération de la liste des sport à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listedifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des difficulte", this.listedifficulte);
      });
    },

    async getage() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document sport
      const dbage = collection(firestore, "age");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du sport par ordre croissant (asc)
      const q = query(dbage, orderBy("nom", "asc"));
      // Récupération de la liste des sport à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeage = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Catégorie d'âge accépté", this.listeage);
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


