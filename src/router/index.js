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
import MoncompteView from '../views/MoncompteView.vue'


import MontbeliardView from '../views/villes/MontbeliardView.vue'
import AudincourtView from '../views/villes/AudincourtView.vue'
import BartView from '../views/villes/BartView.vue'
import CourcelleView from '../views/villes/CourcelleView.vue'
import DelleView from '../views/villes/DelleView.vue'
import HericourtView from '../views/villes/HericourtView.vue'
import SeloncourtView from '../views/villes/SeloncourtView.vue'
import TrevenansView from '../views/villes/TrevenansView.vue'
import ValentigneyView from '../views/villes/ValentigneyView.vue'
import VoujeaucourtView from '../views/villes/VoujeaucourtView.vue'



import card from '../components/card.vue'

import lireplus from '../components/lireplus.vue'

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
    { path: '/moncompte', name: 'MoncompteView', component: MoncompteView },


    { path: '/montbeliard', name: 'MontbeliardView', component: MontbeliardView },
    { path: '/audincourt', name: 'AudincourtView', component: AudincourtView },
    { path: '/bart', name: 'BartView', component: BartView },
    { path: '/courcelle', name: 'CourcelleView', component: CourcelleView },
    { path: '/delle', name: 'DelleView', component: DelleView },
    { path: '/hericourt', name: 'HericourtView', component: HericourtView },
    { path: '/seloncourt', name: 'SeloncourtView', component: SeloncourtView },
    { path: '/trevenans', name: 'TrevenansView', component: TrevenansView },
    { path: '/valentigney', name: 'ValentigneyView', component: ValentigneyView },
    { path: '/voujeaucourt', name: 'VoujeaucourtView', component: VoujeaucourtView },



    { path: '/card', name: 'card', component: card },

    { path: '/lireplus', name: 'lireplus', component: lireplus },


    { path: '/formulaire', name: 'formulaire', component: formulaire },




  ]
})

export default router



