<template>
    <div class="card bg-dark">
        <div class="card-header">
            <h5>Vidéos disponibles
                <span class="float-right" title="Créer une nouvelle vidéo">
                    <router-link to="/createVideo">
                        <i class="fa fa-plus fa-lg text-light"></i>
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">Vidéo</th>
                        <th scope="col">Infos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>                                        
                                <h5 class="media-heading centree"><b>Akira</b></h5>
                                <img class="media-object imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/akira.jpg" alt="Akira">
                            </td>
                        <td>                            
                            <div>
                                <span class="libelle">Nationalités : </span>
                                Japon
                            </div>
                            <div>
                                <span class="libelle">Réalisateurs : </span>
                                Katsuhiro Otomo
                            </div>
                            <div>
                                <span class="libelle">Acteurs : </span>
                            </div>                                   
                            <div>
                                <span class="libelle">Catégories : </span>
                                Action, Science-Fiction
                            </div>
                            <div>
                                <span class="libelle">Types : </span>
                                Divertissement, Mangas
                            </div>
                            <div>
                                <div class="libelle">Synopsis : </div>
                                <div class="synopsis">
                                    Mise en images pour le cinema d&#039;une bande dessinée apocalyptique sur les débuts du XXIe siecle dans  ...
                                </div>
                            </div>
                            <br/>
                            <div class="panel panel-info pull-right">    
                                <ul class="nav nav-pills text-dark"> 
                                    <li>
                                        <a href="#"> 
                                            <span  title="Supprimer la vidéo">
                                                <i class="fa fa-times fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                            <span  title="Modifier la vidéo">
                                                <i class="fa fa-edit fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                            <span  title="Réalisateur(s)">
                                                <i class="fa fa-video-camera fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                        <span  title="Acteur(s)">
                                            <i class="fa fa-users fa-lg text-light" ></i>
                                        </span>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </td>
                    </tr>
                        <tr>
                        <td>                                        
                                <h5 class="media-heading centree"><b>Avatar</b></h5>
                                <img class="media-object imageSmall" src="https://jsonvideo.jmfino.fr/imagesvideos/avatar.jpg" alt="Akira">
                            </td>
                        <td>                            
                            <div>
                                <span class="libelle">Nationalités : </span>
                                Etats-Unis
                            </div>
                            <div>
                                <span class="libelle">Réalisateurs : </span>
                                James Cameron
                            </div>
                            <div>
                                <span class="libelle">Acteurs : </span>
                                Zoe Saldana, Sam Worthington, Sigourney Weaver
                            </div>                                   
                            <div>
                                <span class="libelle">Catégories : </span>
                                Action, Science-Fiction
                            </div>
                            <div>
                                <span class="libelle">Types : </span>
                                Aventures, Fantastique, Science-Fiction
                            </div>
                            <div>
                                <div class="libelle">Synopsis : </div>
                                <div class="synopsis">
                                    Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un ...
                                </div>
                            </div>
                            <br/>
                            <div class="panel panel-info pull-right">    
                                <ul class="nav nav-pills text-dark"> 
                                    <li>
                                        <a href="#"> 
                                            <span  title="Supprimer la vidéo">
                                                <i class="fa fa-times fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                            <span  title="Modifier la vidéo">
                                                <i class="fa fa-edit fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                            <span  title="Réalisateur(s)">
                                                <i class="fa fa-video-camera fa-lg text-light" ></i>
                                            </span>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#">
                                        <span  title="Acteur(s)">
                                            <i class="fa fa-users fa-lg text-light" ></i>
                                        </span>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name:'ListeView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


