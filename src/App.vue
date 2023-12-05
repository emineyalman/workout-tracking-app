<template>
  <v-app>
    <v-main>
      <MyNavbar/>
    <RouterView/>
    </v-main>
  </v-app>
</template>





<script>
import MyNavbar from './components/MyNavbar.vue'
export default {
  name: 'App',

   components: {
     MyNavbar,
  },

  data: () => ({
   
  }),
}
</script>
