<template>
  <v-card
    color="grey-lighten-4"
    flat
    height="100px"
    rounded="0"
  >
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Workout Tracking</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/OneDay">
        <v-btn>
          1.Days
        </v-btn>
      </router-link>

      <router-link to="/TwoDay">
            <v-btn >
            2.Days
            </v-btn>
      </router-link>  

      <router-link to="/AllExercise">
      <v-btn prepend-icon="mdi-list">
        All Exercises
      </v-btn>
      </router-link>     

      <router-link to="/LoginPage">
      <v-btn prepend-icon="mdi-list">
        Login
      </v-btn>
      </router-link>  

      <router-link to="/SignUp">
      <v-btn prepend-icon="mdi-list">
        SignUp
      </v-btn>
      </router-link>  
      
    </v-toolbar>

    
  </v-card>
</template>