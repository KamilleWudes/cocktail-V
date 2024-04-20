<template>
    <div>
<NavView/>
<RouterView />
</div>

    </template>

    <script>  
import NavView from '@/components/Public/NavView.vue'
    export default {
        name: 'LayoutView',
        components: {
            NavView
        }
    }
</script>
