import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MatchspopulaireView from '../views/MatchspopulaireView.vue'
import ContactView from '../views/ContactView.vue'
import CreermatchView from '../views/CreermatchView.vue'
import FonctionnaliteesView from '../views/FonctionnaliteesView.vue'
import ParametreView from '../views/ParametreView.vue'
import MentionsView from '../views/MentionsView.vue'
import FondateursView from '../views/FondateursView.vue'
import MapsView from '../views/MapsView.vue'


import card from '../components/card.vue'
import card2 from '../components/card2.vue'
import card3 from '../components/card3.vue'

import formulaire from '../components/formulaire.vue'









const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/matchspopulaire', name: 'MatchspopulaireView', component: MatchspopulaireView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/creermatch', name: 'CreermatchView', component: CreermatchView },
    { path: '/fonctionnalitees', name: 'FonctionnaliteesView', component: FonctionnaliteesView },
    { path: '/parametre', name: 'BathParametreView', component: ParametreView },
    { path: '/mentions', name: 'MentionsView', component: MentionsView },
    { path: '/fondateurs', name: 'FondateursView', component: FondateursView },
    { path: '/maps', name: 'MapsView', component: MapsView },


    { path: '/card', name: 'card', component: card },
    { path: '/card2', name: 'card2', component: card2 },
    { path: '/card3', name: 'card3', component: card3 },

    { path: '/formulaire', name: 'formulaire', component: formulaire },




  ]
})

export default router



