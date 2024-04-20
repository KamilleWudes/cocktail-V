<template>
    <div>
        <h1>Connexion</h1>
    </div>
    <form @submit.prevent="login">
        <div class="formGroup">
            <label for="user_login">Email</label>
            <input type="text" id="user_login" v-model="user.email"/>
        </div>
        <div class="formGroup">
            <label for="user_password">Password</label>
            <input type="text" id="user_password"  v-model="user.password"/>
        </div>
        <div class="formGroup">
            <button type="submit" class="button">Connexion </button>
        </div>
    </form>
</template>

<script>
import { accountService } from '@/_sevices'
    export default {
        name: "login",
        data() {
            return {
                user: {
                    email:'',
                    password :''
 
                }
            }
        },
        methods: {
            login(){
                accountService.login(this.user)
                .then(res=>{
                    //console.log(res.data)
                    accountService.saveToken(res.data.token)
                    this.$router.push('admin/dashboard')
                })
                .catch(err=>{ console.log(err)})
                
            }
        },
    }
   

</script>