<template>
  <div class="header">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">Le club</router-link>
    <router-link to="/about">Calendrier</router-link>
    <router-link to="/about">Evènements</router-link>
    <router-link to="/about">Section sportive</router-link>
    <router-link to="/about">Equipes</router-link>
    <router-link to="/about">Multimédia</router-link>
    <router-link to="/about">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style scoped>
.header {
  background-color: red;
  height: 200px;
}
</style>
