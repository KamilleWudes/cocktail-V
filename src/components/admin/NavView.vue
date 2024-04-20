<template>
  <div>
    <ul>
      <RouterLink :to="{ name: 'dashboard' }">
            <li>Dashboard</li>
      </RouterLink>
      <RouterLink :to="{ name: 'uList' }">
           <li>List User</li>
      </RouterLink>
      <RouterLink :to="{ name: 'uAdd' }">
          <li>Ajout user</li>
      </RouterLink>

      <hr />
      <RouterLink :to="{name:'cList'}">
          <li>Liste Cocktail</li>
      </RouterLink>
      <RouterLink :to="{name:'cEdit'}">
          <li>Ajout Cocktail</li>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
};
</script>
