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

import ListeView from '../views/admin/ListeView.vue'
import SportView from '../views/admin/SportView.vue'



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

import ChatView from '../views/ChatView.vue'

//Participant
import ListeParticipant from '../views/participant/ListeView.vue'
import CreateParticipant from '../views/participant/CreateView.vue'
import UpdateParticipant from '../views/participant/UpdateView.vue'
import DeleteParticipant from '../views/participant/DeleteView.vue'

//Participant
import ListeTerrain from '../views/terrain/ListeView.vue'
import CreateTerrain from '../views/terrain/CreateView.vue'
import UpdateTerrain from '../views/terrain/UpdateView.vue'
import DeleteTerrain from '../views/terrain/DeleteView.vue'


import card from '../components/card.vue'

import lireplus from '../components/lireplus.vue'

import formulaire from '../components/formulaire.vue'
import { guardReactiveProps } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/matchspopulaire', name: 'MatchspopulaireView', component: MatchspopulaireView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/creermatch', name: 'CreermatchView', component: CreermatchView, beforeEnter: guard },
    { path: '/fonctionnalitees', name: 'FonctionnaliteesView', component: FonctionnaliteesView },
    { path: '/parametre', name: 'BathParametreView', component: ParametreView },
    { path: '/mentions', name: 'MentionsView', component: MentionsView },
    { path: '/fondateurs', name: 'FondateursView', component: FondateursView },
    { path: '/maps', name: 'MapsView', component: MapsView },
    { path: '/moncompte', name: 'MoncompteView', component: MoncompteView },

    { path: '/ville', name: 'ListeView', component: ListeView },
    { path: '/sport', name: 'SportView', component: SportView },


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

    { path: '/chat', name: 'ChatView', component: ChatView },

    //Participant
    { path: '/participants', name: 'ListeParticipant', component: ListeParticipant },
    { path: '/createParticipant', name: 'CreateParticipant', component: CreateParticipant },
    { path: '/UpdateParticipant/:id', name: 'UpdateParticipant', component: UpdateParticipant },
    { path: '/DeleteParticipant/:id', name: 'DeleteParticipant', component: DeleteParticipant },

    //terrain
    { path: '/terrain', name: 'ListeTerrain', component: ListeTerrain },
    { path: '/createTerrain', name: 'CreateTerrain', component: CreateTerrain },
    { path: '/UpdateTerrain/:id', name: 'UpdateTerrain', component: UpdateTerrain },
    { path: '/DeleteTerrain/:id', name: 'DeleteTerrain', component: DeleteTerrain },


    { path: '/card', name: 'card', component: card },
    { path: '/lireplus', name: 'lireplus', component: lireplus },
    { path: '/formulaire', name: 'formulaire', component: formulaire },




  ]
})

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "AccueilView" });
          return;
        }
      })
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({ name: "AccueilView" });
    }
  });
}

export default router






