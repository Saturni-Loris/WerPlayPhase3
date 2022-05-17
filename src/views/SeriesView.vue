<template>
    <div class="container ">                
        <div class="row"> 
            <div class="card bg-dark">
                <div class="card-header">
                    <strong>Liste des séries disponibles</strong>
                </div>
                <div class="card-body table-responsive">
                    <table class="table text-light">
                        <thead>
                            <tr>
                                <td>Vidéos</td>
                                <td>Infos</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <h5 class="media-heading"><b>Games Of Thrones</b></h5>
                                    <img class="media-object imageSmall" 
                                    src="https://jsonvideo.jmfino.fr/imagesvideos/gamesofthrones-saison4.png" alt="Game of thrones">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span>
                                        <span>Etats-Unis</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span>
                                        <span>D.B. Weiss, David Benioff</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span>
                                        <span>Kit Harington, Emilia Clarke, Peter Dinklage</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span>Action Aventure Fantastique Drame</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                                Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut dur...
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <h5 class="media-heading"><b>Revolution</b></h5>
                                    <img class="imageSmall" 
                                    src="https://jsonvideo.jmfino.fr/imagesvideos/revolution-saison1.jpg" alt="Revolution">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span><span>Etats-Unis</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span><span>Eric Kripke</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span><span>Billy Burke, Tracy Spiridakos, Giancarlo Esposito</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span class="texte">Aventure Science-Fiction Drame</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                            Le monde bascule dans une ère sombre lorsque l'électricité cesse soudainement de fonctionner. Sans technologie moderne, ...
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>   
                </div>  
            </div>
        </div>
    </div>

</template>

<script>

export default {
  name:'SeriesView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


