import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MatchspopulaireView from '../views/MatchspopulaireView.vue'
import ContactView from '../views/ContactView.vue'
import CreermatchView from '../views/CreermatchView.vue'
import FonctionnaliteesView from '../views/FonctionnaliteesView.vue'
import ParametreView from '../views/ParametreView.vue'

import card from '../components/card.vue'
import BathView from '../views/Bath.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/matchspopulaire', name: 'MatchspopulaireView', component: MatchspopulaireView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/creermatch', name: 'CreermatchView', component: CreermatchView },
    { path: '/fonctionnalitees', name: 'FonctionnaliteesView', component: FonctionnaliteesView },
    { path: '/parametre', name: 'BathParametreView', component: ParametreView },

    { path: '/card', name: 'card', component: card },
    { path: '/bath', name: 'BathView', component: BathView },


  ]
})

export default router


