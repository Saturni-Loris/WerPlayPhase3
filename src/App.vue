<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "./components/card.vue";
</script>

<template>
  <div class="p-8">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-brand">
        <RouterLink to="/"
          ><img src="../src/assets/logoWerplay.svg"
        /></RouterLink>
      </div>
      <button
        class="navbar-toggler bg-white"
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
            <div class="nav-link">
              <RouterLink to="/films">Créer un match</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/series">Matchs populaire</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/kids">Contact</RouterLink>
            </div>
          </li>
        </ul>

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
            >
              Administration
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <div class="dropdown-item">
                <RouterLink to="/videos">Fonctionnalitées</RouterLink>
              </div>

              <div class="dropdown-item">
                <RouterLink to="/videos">Paramètres</RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>

<script>
export default {
  components: { Card },
};
</script>


