<template>
  <div class="container">
    <div class="card-header">
      <h5>Liste des pays</h5>
    </div>
    <hr />

    <form>
      <h6>Nouveau pays</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createPays()"
          title="Création"
        >
          <i class="fa fa-save fa-lg"></i>
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="table text-light">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left">Liste des Pays actuels</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" v-model="filtre" />
                  <button class="btn btn-light" type="button" title="Filtrage">
                    <i class="fa fa-search fa-lg"></i>
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pays in filtreByName" :key="pays.id">
            <td>
              <form>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nom</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="pays.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="updatePays(pays)"
                    title="Création"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="deletePays(pays)"
                    title="Suppression"
                  >
                    <i class="fa fa-trash fa-lg"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
  name: "ListeView",
  data() {
    return {
      nom: null,
      listePaysSynchro: [],
      filtre: "",
    };
  },

  computed: {
    orderByName: function () {
      return this.listePaysSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    //  Filtrage
    filtreByName: function () {
      // on fait le filtre que si le filtre est renseigné
      if (this.filtre.length > 0) {
        let filtre = this.filtre.tolowerCase();
        //filtrage de la prop. calculée de tri
        return this.orderByName.filtre(function (pays) {
          // on ne renvoie que les pays dont le nom contient la chaine de caractère du filtrez
          return pays.nom.tolowerCase().includes(filtre);
        });
      } else {
        // si l efiltre n'est pa saisie, on renvoie l'intégralité de la liste
        return this.orderByName;
      }
    },
  },

  mounted() {
    this.getPaysSynchro();
  },

  methods: {
    async getPaysSynchro() {
      const firestore = getFirestore();
      const dbPays = collection(firestore, "pays");
      const query = await onSnapshot(dbPays, (snapshot) => {
        this.listePaysSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createPays() {
      const firestore = getFirestore();
      const dbPays = collection(firestore, "pays");
      const docRef = await addDoc(dbPays, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updatePays(pays) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "pays", pays.id);
      await updateDoc(docRef, {
        nom: pays.nom,
      });
    },

    async deletePays(pays) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "pays", pays.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style>
</style>


