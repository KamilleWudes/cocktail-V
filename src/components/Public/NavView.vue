<template>
    <header>
        <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </RouterLink>
    
        <div class="wrapper">
    
          <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/cocktails">Cocktails</RouterLink> |
            <RouterLink to="/contact">Contact</RouterLink> |
            <RouterLink to="/admin/dashboard">Admin</RouterLink>

    
          </nav>
        </div>
      </header>
</template>

<script>
export default {
    name : 'NavView'
}
</script>

<style>
    img{
position: absolute;
right: 30px; 
height: 50px;  

}
</style>