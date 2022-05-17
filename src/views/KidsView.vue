<template>
    <div class="container "> 
        
        <div class="row"> 
            <div class="card bg-dark">

                <div class="card-header">
                    <strong>Liste des vidéos Kids disponibles</strong>
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
                                    <h5 class="media-heading"><b>Rebelle</b></h5>
                                    <img class="media-object imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/rebelle.jpg" alt="Rebelle">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span>
                                        <span>Etats-Unis</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span>
                                        <span>Mark Andrews</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span>
                                        <span>Bérénice Béjot</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span>Aventure Comédie Famille</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                                Depuis la nuit des temps, au cœur des terres sauvages et mystérieuses des Highlands d’Ecosse, récits de batailles épiques...
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <h5 class="media-heading"><b>Toy Story 3</b></h5>
                                    <img class="imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/toystory3.jpg" alt="Toy Story 3">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span><span>Etats-Unis</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span><span>Lee Unkrich</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span><span>Tom Hanks</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span class="texte">Aventure Comédie</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                            Les créateurs des très populaires films Toy Story ouvrent à nouveau le coffre à jouets et invitent les spectateurs à ret...
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
  name:'KidsView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


