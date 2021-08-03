<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
      style="background-color:black; padding-right:100px"
    >

      <v-spacer></v-spacer>

      <router-link to="/photography">
        <span text class="navItem">Photography</span>
      </router-link>

      <router-link to="/design">
        <span class="navItem">UX/UI/Design</span>
      </router-link>

      <router-link to="/contact">
        <span class="navItem">Contact</span>
      </router-link>            

    </v-app-bar>

    <v-main style="background-color:black">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  @import './assets/css/styles.css';
</style>
