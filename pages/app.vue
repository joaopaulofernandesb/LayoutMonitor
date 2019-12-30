<template>
  
   <v-app id="inspire">
    <v-card
    class="slidecard"
    style="background-color: rgba(20, 137, 204, 0);"
    >
      <v-toolbar
        color="deep-purple accent-4"
        dark
        style=" border-radius: 0px 0px 40px 40px; height:160px;"
        class="backgoundbar"
      >
        <v-app-bar-nav-icon ></v-app-bar-nav-icon>
  
        <v-toolbar-title><br><br><br>Bem Vindo! Usuário<br>Você tem {{cards.length}} Ticket Ativos</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
  
    
       <v-sheet

     
      style="background-color: rgba(20, 137, 204, 0);"
    
    >
      <v-slide-group
        v-model="model"

        style="background-color: rgba(20, 137, 204, 0);"
      >
        <v-slide-item
          v-slot:default="{ active, toggle }"
        >

        <v-row 
     
              align="center"
              justify="center">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="flex" 
        >

       <cardMonitor/>
        
        </v-col>

 
      </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>





    </v-card>
  </v-app>
</template>
<script>import moment from 'moment'
import axios from 'axios'
import cardMonitor from '../components/cardMinitoramento.vue'
  export default {
   components:{
     cardMonitor
   },
    props: {
      source: String,
    },
    data: () => ({
    items: [
      { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
    ],
    items2: [
      { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
    ],
    cards:'10'
  }),

mounted() {
      

    axios.get('https://api.unsplash.com/photos/?client_id=54d9ae96f2fcc6dffd217e64133a545fc383ee525452e53ac3766fe6fb129a9f')
    .then(response => {

        this.cards = response.data
           this.$vuetify.theme.dark = false
        
        



    })
    .catch(e => {
      this.errors.push(e)
    })
    
  },

  
    
}
</script>
<style>
.backgoundbar{
      	background: -webkit-linear-gradient(to right, #1488CC, #2B32B2);
	background: linear-gradient(to right, #1488CC, #2B32B2);
}
.slidecard{
    background-color: rgba(20, 137, 204, 0);
    box-shadow: none;
}
.theme--light.v-application {
    background: white !important;
   
}
</style>
