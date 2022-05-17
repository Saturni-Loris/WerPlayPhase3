<template>
    <div class="container">
        <form enctype="multipart/form-data" >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Création participant</h5>
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
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prénom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Prénom de la personne"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
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
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control" 
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Pays</span>
                                </div>
                                <select class="custom-select" >
                                    <option selected disabled>Sélectionner un Pays</option>
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-light">
                        Créer
                    </button>
                    <button class="float-right btn btn-light" >
                        <router-link to="/participants" >Cancel</router-link>
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


