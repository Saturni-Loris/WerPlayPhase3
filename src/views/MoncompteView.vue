<template>
  <div class="flex items-center justify-center">
    <form
      class="py-10 sm:mr-10 md:mr-10 xl:mr-10 2xl:mx-32"
      @submit.prevent="onCnx()"
    >
      <div class="pb-12 pr-10">
        <h1 class="px-10 text-3xl font-bold">
          CONNECTEZ
          <span class="text-jaune">-</span>VOUS
        </h1>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="text-white rounded-l-lg bg-orangewerplay px-4">
            Email :
          </button>
        </div>
        <input
          class="form-control"
          placeholder="ex: arthurpayacoco@gmail.com"
          type="text"
          v-model="user.email"
          required
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="text-white rounded-l-lg bg-orangewerplay px-4">
            Mot de passe :
          </button>
        </div>
        <input
          class="form-control"
          type="password"
          v-model="user.password"
          required
          placeholder="********"
        />
      </div>
      <div
        class="alert alert-warning mb-3 text-center"
        rold="alert"
        v-if="message != null"
      >
        {{ message }}
      </div>

      <div class="py-6">
        <div
          class="
            flex flex-shrink-0 flex-grow-0
            items-center
            justify-center
            pb-2
          "
        >
          <div class="">
            <button
              class="text-white rounded bg-orangewerplay py-2 px-16 font-bold"
              type="submit"
            >
              Connexion
            </button>
          </div>
        </div>

        <div class="flex flex-shrink-0 flex-grow-0 items-center justify-center">
          <button
            class="
              font-base
              rounded
              border-2 border-orangewerplay
              py-1
              px-8
              text-orangewerplay
            "
            @click="onDcnx()"
            type="button"
          >
            Deconnexion
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "Moncompte",
  data() {
    return {
      imageData: null,
      type: false,
      user: {
        email: null,
        password: null,
      },
      message: null,
      listeEvenement: [],
      nom: null,
      listeEvenementSynchro: [],
    };
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "Vous êtes connecté: " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }

    this.getEvenement();

    this.getEvenementSynchro();
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          //e.log("Vous êtes connecté", response.user);
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          this.message = "Vous êtes connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "Vous êtes déconnecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("Erreur deconnexion ", error);
        });
    },

    async getEvenement() {
      const firestore = getFirestore();
      const dbEvenement = collection(firestore, "evenement");
      const query = await getDocs(dbEvenement);
      query.forEach((doc) => {
        let evenement = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeEvenement.push(evenement);
      });
    },

    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    async getEvenementSynchro() {
      const firestore = getFirestore();
      const dbEvenement = collection(firestore, "evenement");
      const query = await onSnapshot(dbEvenement, (snapshot) => {
        this.listeEvenementSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
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
  },
};
</script>

<style>
</style>
