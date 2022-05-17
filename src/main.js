import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBv02bojacjY7YxDV1vj4fxIul2WmNhBPY",
    authDomain: "fir-vuejs3-5cc46.firebaseapp.com",
    projectId: "fir-vuejs3-5cc46",
    storageBucket: "fir-vuejs3-5cc46.appspot.com",
    messagingSenderId: "1071770248092",
    appId: "1:1071770248092:web:6d17bf12e4895d5305de59"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')