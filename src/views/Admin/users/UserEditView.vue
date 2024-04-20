<template>
    <div>user Edit page</div>
    <div>{{ id }}</div>
    <form @submit.prevent="editUser">
        <div class="formGroup">
            <label for="user_login">Name </label>
            <input type="text" id="user_name" v-model="user.name"/>
        </div> <br>
        <div class="formGroup">
            <label for="user_login">Email </label>
            <input type="text" id="user_login" v-model="user.email"/>
        </div> <br>
        <div class="formGroup">
            <label for="user_password">Password </label>
            <input type="text" id="user_password"  v-model="user.password"/>
        </div> <br>
        <div class="formGroup">
            <button type="submit" class="button">Modification </button>
        </div>
        <input type="hidden" v-model="user.id"/>

    </form>
    
</template>
<script>
import { userService } from '@/_sevices';

export default {
    name:'UserEdit',
    props:['id'], // Recuperation d'id user
    data() {
            return {
                user: { }
            }
        },

    mounted() {
      //Recuperation à l'API pour l'affichage de l'utilisateur

        userService.getUser(this.id)
        .then(res =>{
            //console.log(res)
            this.user=res.data.user
        })
        .catch(err =>console.log(err))
    },
    methods: {
        //Envoi à l'API pour modification
        editUser(){
            userService.updateUser(this.user)
                .then(res=>{
                    this.$router.push({name:'uList'})
                })
                .catch(err=>{ console.log(err)})
                
            }
        },
}
</script>