<template>
    <div class="card bg-dark">
        <div class="card-header">
            <h5>Liste des participants
                <span class="float-right" title="Créer un nouveau participant">
                    <router-link to="/createParticipant">
                        <i class="fa fa-plus fa-lg text-light"></i>
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col" class="text-center">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Né le</th>
                        <th scope="col">Actions</th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">                                        
                                <img class="imageSmall" src="https://jsonvideo.jmfino.fr/imagespersonnes/J.J.Abrams.jpg" alt="Jeffrey Abrams">
                            </td>
                        <td><b>Abrams</b></td>
                        <td>Jeffrey Jacob</td>
                        <td>Etats-Unis</td>
                        <td>27/06/1966</td>
                        <td>
                            <span title="Supprimer le participant">
                                <a href="#">
                                    <i class="fa fa-times fa-lg text-light" ></i>
                                </a>
                            </span>
                            <span  title="Modifier le participant">
                                <a href="#" >
                                    <i class="fa fa-edit fa-lg text-light" ></i>
                                </a>
                            </span>    
                            <span title="Gérer les participations aux vidéos">
                                <a href="#" >
                                    <i class="fa fa-television fa-lg text-light" ></i>
                                </a>
                            </span>               
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">                                        
                                <img class="imageSmall" src="https://jsonvideo.jmfino.fr/imagespersonnes/AmyAdams.jpg" alt="Amy Adams">
                            </td>
                        <td><b>Adams</b></td>
                        <td>Amy</td>
                        <td>Etats-Unis</td>
                        <td>20/08/1974</td>
                        <td>
                            <span title="Supprimer le participant">
                                <a href="#">
                                    <i class="fa fa-times fa-lg text-light" ></i>
                                </a>
                            </span>
                            <span  title="Modifier le participant">
                                <a href="#" >
                                    <i class="fa fa-edit fa-lg text-light" ></i>
                                </a>
                            </span>    
                            <span title="Gérer les participations aux vidéos">
                                <a href="#" >
                                    <i class="fa fa-television fa-lg text-light" ></i>
                                </a>
                            </span>               
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


