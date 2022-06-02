import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCB-RkF-2DFS_mnvIxWtGhOuMHYwmkAykg",
    authDomain: "werplayphase3s2.firebaseapp.com",
    projectId: "werplayphase3s2",
    storageBucket: "werplayphase3s2.appspot.com",
    messagingSenderId: "149885622799",
    appId: "1:149885622799:web:6b28a8d4edaf219244e17a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')