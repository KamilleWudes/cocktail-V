<template>

    <div class="ad_head">
        Header Admin
        <button @click="logout()">Logout</button>

    </div>

</template>

<script>
import { accountService } from '@/_sevices';
export default {
    name:'AdminHeader',
    methods:{
        logout(){
            accountService.logout()
            this.$router.push('/')
    }
    }
}
</script>

<style>

.ad_head{
    border-bottom: solid 1px black;
    text-align: center;
}

bottom{
    float: right;
};

</style>
