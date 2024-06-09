<script setup>

</script>

<template>
  <div>
    <h1>Todo Main Page</h1>

    <ul class="flex p-2 m-2 border-2">
      <li class="ml-2"> <RouterLink to="/todo/list">List</RouterLink></li>
      <li class="ml-2"> <RouterLink to="/todo/add">ADD</RouterLink></li>
    </ul>

    <RouterView></RouterView>

  </div>
</template>

<style scoped>

</style>