<template>
  <div class="container mt-4">
    <form enctype="multipart/form-data" @submit.prevent="updateParticipant">
      <div class="card">
        <div class="card-header text-white bg-orangewerplay">
          <h5 class="">Mise à jour des terrains</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="text-center">
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-orangewerplay"
                    >Adresse</span
                  >
                </div>
                <input
                  class="form-control"
                  placeholder="Nom de la personne"
                  v-model="participant.nom"
                  required
                />
              </div>

              <br />
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
                    >Crée le</span
                  >
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
                  <span class="input-group-text text-white bg-orangewerplay"
                    >Ville</span
                  >
                </div>
                <select class="custom-select" v-model="participant.nationalite">
                  <option selected disabled>Sélectionner un ville</option>

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
                  <option selected disabled>Sélectionner un sport</option>

                  <option v-for="sport in listesport" :key="sport.nom">
                    {{ sport.nom }}
                  </option>
                </select>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text text-white bg-orangewerplay"
                    >Age</span
                  >
                </div>
                <select class="custom-select" v-model="participant.age">
                  <option selected disabled>
                    Sélectionner une catégorie d'âge
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
                  <option selected disabled>
                    Sélectionner une catégorie d'âge
                  </option>

                  <option
                    v-for="difficulte in listedifficulte"
                    :key="difficulte.nom"
                  >
                    {{ difficulte.nom }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button
            type="submit"
            class="
              btn
              float-left
              border-2 border-orangewerplay
              text-orangewerplay
            "
          >
            Modifier
          </button>
          <button class="btn text-white float-right bg-orangewerplay">
            <RouterLink to="/participants">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="pb-20"></div>
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
  name: "UpdateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeville: [], // Liste des ville pour la nationalité du participant
      listesport: [], // Liste des sport pour la nationalité du participant
      listeage: [], // Liste des age pour la nationalité du participant
      listedifficulte: [], // Liste des difficulte pour la nationalité du participant

      participant: {
        // Le participant à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
        nationalite: null, // sa nationalité
        sport: null, // sa nationalité
      },

      refParticipant: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id participant", this.$route.params.id);
    // Recherche participant concerné
    this.getParticipant(this.$route.params.id);
    // Appel de la liste des ville
    this.getville();
    // Appel de la liste des sport
    this.getsport();
    // Appel de la liste des ville
    this.getage();
    // Appel de la liste des age
    this.getdifficulte();
    // Appel de la liste des diffuclte
  },

  methods: {
    async getville() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document ville
      const dbville = collection(firestore, "ville");
      // Liste des participants triés
      const q = query(dbville, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeville = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getsport() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document sport
      const dbsport = collection(firestore, "sport");
      // Liste des participants triés
      const q = query(dbsport, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listesport = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.participant.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
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

    async updateParticipant() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "participant/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "participant/" + this.participant.photo);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            //console.log("Uploaded a base64 string", this.participant.photo);
          }
        );
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(
        doc(firestore, "participant", this.$route.params.id),
        this.participant
      );
      // redirection sur la liste des participants
      this.$router.push("/participants");
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


