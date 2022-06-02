<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "./components/card.vue";
</script>

<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        bg-white
        border-b-2 border-orangewerplay
      "
    >
      <div class="navbar-brand pl-2">
        <span v-if="avatar != null" class="mr-3">
          <img class="avatar" :src="avatar" />
        </span>
        <RouterLink to="/">{{ name }}</RouterLink>
      </div>

      <button
        class="navbar-toggler bg-orangewerplay"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link" v-if="isAdmin">
              <RouterLink to="/creermatch">Créer un match</RouterLink>
            </div>
          </li>
          <hr class="text-gray-400 my-2 border-t-2" />
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/matchspopulaire">Matchs populaire</RouterLink>
            </div>
          </li>
          <hr class="text-gray-400 my-2 border-t-2" />

          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/contact">Contact</RouterLink>
            </div>
          </li>
          <hr class="text-gray-400 my-2 border-t-2" />

          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/moncompte">Mon compte</RouterLink>
            </div>
          </li>
        </ul>

        <hr class="text-gray-400 my-2 border-t-2" />

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-if="isAdmin"
            >
              Administration
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="ville">Ville</a>

              <div class="dropdown-item">
                <RouterLink to="/participants">Participants</RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />
  </div>

  <footer class="text-white bg-orangewerplay text-center lg:text-left">
    <div
      class="
        border-gray-300
        flex
        items-center
        justify-center
        border-b
        p-6
        lg:justify-between
      "
    >
      <div class="mr-12 hidden lg:block"></div>
      <div class="flex justify-center">
        <a
          href="https://www.facebook.com/WerPlayPport/"
          class="text-gray-600 mr-6"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.twitter.com/werplay_fr/"
          class="text-gray-600 mr-6"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            class="w-7"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/werplaysport/"
          class="text-gray-600 mr-6"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="">
          <h6
            class="
              mb-4
              flex
              items-center
              justify-center
              font-semibold
              uppercase
              md:justify-start
            "
          >
            <RouterLink to="/"
              ><img
                class="w-16"
                src="../src/assets/logoWerplayblanc.svg"
                alt=""
            /></RouterLink>
          </h6>
        </div>
        <div class="">
          <h6
            class="
              mb-4
              flex
              justify-center
              font-semibold
              uppercase
              md:justify-start
            "
          >
            WerPlay
          </h6>
          <p class="mb-4">
            <a href="" class="text-gray-600"
              ><RouterLink to="/fonctionnalitees"
                >Fonctionnalitées</RouterLink
              ></a
            >
          </p>

          <p class="mb-4">
            <a href="" class="text-gray-600"
              ><RouterLink to="/maps">Maps</RouterLink></a
            >
          </p>

          <p class="mb-4">
            <a href="#!" class="text-gray-600"
              ><RouterLink to="/mentions">Mentions légales</RouterLink></a
            >
          </p>
        </div>
        <div class="">
          <h6
            class="
              mb-4
              flex
              justify-center
              font-semibold
              uppercase
              md:justify-start
            "
          >
            Assistance
          </h6>
          <p class="mb-4">
            <a href="" class="text-gray-600"
              ><RouterLink to="/contact">Contact</RouterLink></a
            >
          </p>

          <p class="mb-4">
            <a href="#!" class="text-gray-600"
              ><RouterLink to="/fondateurs">Fondateurs</RouterLink></a
            >
          </p>
        </div>
        <div class="">
          <h6
            class="
              mb-4
              flex
              justify-center
              font-semibold
              uppercase
              md:justify-start
            "
          >
            Communauté
          </h6>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="mr-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            <a href="https://goo.gl/maps/NREXqYxHei6pWvAu9"
              >4 Place Tharradin, 25200 Montbéliard</a
            >
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              class="mr-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              ></path>
            </svg>
            <a href="mailto:werplay.contact@gmail.com"
              >werplay.contact@gmail.com</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 p-2 text-center">
      <p>©2021 Loris Saturni | Arthur Meyer | Asma Es-Sabbar</p>
    </div>
  </footer>
</template>


<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>

<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import { emitter } from "../src/main";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  components: { Card, MenuIcon },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      name: "WerPlay",
      avatar: null,
      isAdmin: false,
    };
  },

  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      //console.log("App => Rececption user connecté", this.user);
      this.getUserInfo(this.user);
    });

    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      //console.log("App => Reception user déconnecté", this.user);
      this.userInfo = null;
      this.name = "Invité de WerPlay";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            //console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
@import "../src/assets/style.css";

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>



