<template>
    <div>
        <h1>Creation d'un utilisateur </h1>
        <p v-if="errors.length">
            <b>Merci de corriger les erreurs suivantes</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
    <form @submit.prevent="addUser">
        <div class="formGroup">
            <label for="user_login">Name </label>
            <input type="text" id="user_name" v-model="user.name"/>
        </div> <br>
        <div class="formGroup">
            <label for="user_login">Email </label>
            <input type="text" id="user_email" v-model="user.email"/>
        </div><br>
        <div class="formGroup">
            <label for="user_password">Password </label>
            <input type="text" id="user_password"  v-model="user.password"/>
        </div><br>
        <div class="formGroup">
            <label for="user_password">Verification </label>
            <input type="text" id="confirme"  v-model="confirme"/>
        </div><br>
        <div class="formGroup">
            <button type="submit" class="button">Ajouter </button>
        </div>

    </form>
</div>
    
</template>
<script>
import { userService } from '@/_sevices';

export default {
    name:'UserAdd',
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:''
            },
            confirme:'',
            errors:[]
        }
    },
    methods: {
        //Envoi à l'API pour modification
        addUser(){

            this.errors = []
            if(this.user.password != this.confirme){
                this.errors.push('le mot de passe doit correspondre avec la verification ')
            }
            if(this.user.password.length < 6){
                this.errors.push('le mot de passe doit avoir 06 caractères')
            }
            if(this.errors.length == 0){   
            
            userService.createUser(this.user)
                .then(res=>{
                    this.$router.push({name:'uList'})
                })
                .catch(err=>{ console.log(err)})
            }
            }
        },
}
</script>