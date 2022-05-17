<template>
    <div class="container "> 
        
        <div class="row"> 
            <div class="card bg-dark">

                <div class="card-header">
                    <strong>Liste des vidéos Mangas disponibles</strong>
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
                                    <h5 class="media-heading"><b>Akira</b></h5>
                                    <img class="media-object imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/akira.jpg" alt="Akira">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span>
                                        <span>Japon</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span>
                                        <span>Katsuhiro Otomo</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span>Action Science-Fiction</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                                Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-T...
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <h5 class="media-heading"><b>Le chateau dans le ciel</b></h5>
                                    <img class="imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/lechateaudansleciel.jpg" alt="Le chateau dans le ciel">
                                </td>
                                <td>

                                    <div>
                                        <span class="libelle">Nationalités : </span><span>Japon</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Réalisateurs : </span><span>Hayao Miyazaki</span>
                                    </div>
                                    <div>
                                        <span class="libelle">Acteurs : </span><span></span>
                                    </div>
                                    <div>
                                        <span class="libelle">Catégories : </span>
                                        <span class="texte">Aventure Fantastiques Science-Fiction</span>
                                    </div>
                                    <div>
                                        <div class="libelle">Synopsis : </div>
                                        <div>
                                            Retenue prisonnière par des pirates dans un dirigeable, la jeune Sheeta saute dans le vide en tentant de leur échapper. ... 
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
  name:'MangasView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


