<template>
    <div class="admin">
        <AdminHeader/>
        <div class="ad_contain">
            <div id="ad_side">
                <AdminNav/>
            </div>
            <div id="ad_display">
                <RouterView />
            </div>

        </div>
</div>

    </template>

    <script>  
    import AdminHeader from '@/components/admin/HeaderView.vue'
    import AdminNav from '@/components/admin/NavView.vue'
    export default {
        name: 'AdminLayout',
        components: {
            AdminHeader,
            AdminNav

        }
       
    }
</script>

<style>
.ad_contain{
    display: flex;
    justify-content: flex-start;
}

#ad_side{
    width: 12%;
    border-right: solid 1px black;
    height: 100%;
}
#ad_display{
    width: 100%;
    padding: 10px;
    text-align: left;
}


</style>
