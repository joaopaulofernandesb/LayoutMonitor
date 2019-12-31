<template>
  
   <v-app id="inspire">

    
     
    <v-card
    class="slidecard"

    >
      <v-toolbar
        color="deep-purple accent-4"
        dark
        style=" border-radius: 0px 0px 0px 40px; height:250px;"
        class="backgoundbar"
      >
        <v-app-bar-nav-icon  @click.stop="sheet = !sheet"></v-app-bar-nav-icon>
  
        <v-toolbar-title><br><br><br><br><br><br><br>Bem Vindo! Usuário<br>Você tem {{cards.length}} Ticket Ativos</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>


     
       <v-sheet

     
     
    
    >
      <v-slide-group
        v-model="model"

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
          
        >

       <cardMonitor/>
        
        </v-col>

 
      </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

 <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
       
      </template>
      <v-list class="menustyle">
        <v-subheader>Opções</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          :to="tile.to"
        >
          <v-list-item-avatar>
            <v-avatar size="50px" tile>
             <v-icon :color="tile.color">{{tile.img}}</v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>



 <v-btn  class="btnadd"
                dark
                absolute
                right
                fab
                @click="dialog = true" > <v-icon>mdi-plus</v-icon></v-btn>


                <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Busca de Passagem</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Origen" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Destino" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Data da Ida"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
              </v-col>
              





 <v-col cols="12" sm="6" md="4">
                  <v-menu
    ref="menu"
    v-model="dataVolta"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="datavoltapass"
        label="Data da Volta"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="datavoltapass"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
              </v-col>









              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
                </v-row>



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
    cards:'',
    dialog:'',
     date: null,
      menu: false,
      dataVolta:false,
      datavoltapass:null,
      model:'',
      beforeinstallprompt:null,
      drawer: false,
       rating: 3,
       sheet: false,
      tiles: [
        { img: 'mdi-home', title: 'Home', to:'/home' ,color:'#000' },
        { img: 'mdi-account-circle', title: 'Perfil', to:'#' ,color:'#000' },
        {img:'mdi-exit-to-app', title:'Sair', to:'/' ,color:'#000'}
      ],
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

   watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'Month'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },

  
    
}
</script>
<style>

</style>
