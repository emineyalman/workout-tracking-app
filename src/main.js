import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router';
import '@mdi/font/css/materialdesignicons.css'




loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
  

