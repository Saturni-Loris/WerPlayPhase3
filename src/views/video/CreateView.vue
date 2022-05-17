<template>
    <div class="container">
        <form enctype="multipart/form-data" >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Création vidéo</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Titre</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Titre de la vidéo"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Durée</span>
                                </div>
                                <input id="duree" type="number" class="form-control" required />
                                <div class="input-group-append">
                                    <span class="input-group-text">mn</span>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Affiche</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Fichier</span>
                                </div>
                                <input type="text" 
                                    class="form-control" 
                                    id="fichier"
                                    placeholder="id fichier bande annonce YouTube" 
                                    required 
                                />
                            </div>
                            <br/>

                        </div>
                    </div>    

                   <hr/>
                    <div class="row">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Synopsis</span>
                            </div>
                            <textarea class="form-control" name="synopsis" rows="5"
                                id="synopsis" placeholder="Résumé de la vidéo" required ></textarea>
                        </div>
                    </div> 
                   <hr/>
                    <div class="row">
                        
                            <table class="table table-light table-striped" >
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="col-6">Catégories</th>                                       
                                        <th class="col-6">Type</th>                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="col-6">
                                            <div class="form-check form-check-inline">
                                                <input type="checkbox" class="form-check-input" >
                                                <label class="form-check-label">Action</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input type="checkbox" class="form-check-input" >
                                                <label class="form-check-label">Aventure</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input type="checkbox" class="form-check-input" >
                                                <label class="form-check-label">Comédie</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input type="checkbox" class="form-check-input" >
                                                <label class="form-check-label">Fantastique</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input type="checkbox" class="form-check-input" >
                                                <label class="form-check-label">Science-fiction</label>
                                            </div>
                                        </td>
                                        <td class="col-6">
                                            <select class="custom-select" >
                                                <option selected disabled>Sélectionner un Type</option>
                                                <option>Film</option>
                                                <option>Kids</option>
                                                <option>Série</option>
                                                <option>Manga</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                       

                    </div>
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-light">
                        Créer
                    </button>
                    <button class="float-right btn btn-light" >
                        <router-link to="/videos" >Cancel</router-link>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>

export default {
  name:'CreateView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


