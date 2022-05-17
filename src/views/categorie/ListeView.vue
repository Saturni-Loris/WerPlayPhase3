<template>
  <div class="container">
    <div class="card-header">
      <h5>Liste des Categorie</h5>
    </div>
    <hr />

    <form>
      <h6>Nouveau Categorie</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" class="form-control" v-model="libelle" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createCategorie()"
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
              <div class="float-left">Liste des Categorie actuels</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" />
                  <button class="btn btn-light" type="submit" title="Création">
                    <i class="fa fa-search fa-lg"></i>
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categorie in orderByName" :key="categorie.id">
            <td>
              <form>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nom</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categorie.libelle"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="updateCategorie(categorie)"
                    title="Création"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="deleteCategorie(categorie)"
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
      libelle: null,
      listeCategorieSynchro: [],
    };
  },

  computed: {
    orderByName: function () {
      return this.listeCategorieSynchro.sort(function (a, b) {
        if (a.libelle < b.libelle) return -1;
        if (a.libelle > b.libelle) return 1;
        return 0;
      });
    },
  },

  mounted() {
    this.getCategorieSynchro();
  },

  methods: {
    async getCategorieSynchro() {
      const firestore = getFirestore();
      const dbCategorie = collection(firestore, "categorie");
      const query = await onSnapshot(dbCategorie, (snapshot) => {
        this.listeCategorieSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createCategorie() {
      const firestore = getFirestore();
      const dbCategorie = collection(firestore, "categorie");
      const docRef = await addDoc(dbCategorie, {
        libelle: this.libelle,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateCategorie(categorie) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "categorie", categorie.id);
      await updateDoc(docRef, {
        libelle: categorie.libelle,
      });
    },

    async deleteCategorie(categorie) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "categorie", categorie.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style>
</style>


