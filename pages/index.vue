<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >

    

                    <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/ajust">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Config</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list>
     
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Air Ticket Beta</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

       <v-btn icon
        @click="ok(showNav = !showNav)"
      >
          <div v-if="statusbtndark === true">
              <v-icon color="grey darken-3">mdi-lightbulb-outline</v-icon>
          </div>
          <div v-else>
         <v-icon color="yellow">mdi-lightbulb-on</v-icon>
          </div>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
 <v-content>
      <v-container fluid>
       <h1 class="titleh1">Você tem {{cards.length}} Ticket</h1>

      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="flex" 
        >

        <!-- <v-col
          cols="flex" 
        > -->

       <cardMonitor/>
	
  <div v-if="condition">
  </div>
  <div v-else>
  </div>
	
        
        </v-col>
      </v-row>
 

   
     
      </v-container>
    </v-content>

      <v-row justify="center">
        
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn  color="blue"
                dark
                absolute
                right
                fab
                dark 
                v-on="on" > <v-icon>mdi-plus</v-icon></v-btn>
      </template>
      <v-card style="border-radius:12px;">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  v-model="interests"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


      
    
  </v-app>

  
</template>

<script>
import moment from 'moment'
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
      monitoractive:'',
      statusM:'',
      cards:'',
      showNav:null,
      statusbtndark:false,
      dialog: false,
      drawer: false,
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      interests:'',
      json:[],
     
      transition: 'slide-y-reverse-transition',
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),


  mounted() {

    axios.get('https://api.unsplash.com/photos/?client_id=54d9ae96f2fcc6dffd217e64133a545fc383ee525452e53ac3766fe6fb129a9f')
    .then(response => {

        this.cards = response.data
        



    })
    .catch(e => {
      this.errors.push(e)
    })
    
  },

computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },


  methods: {

    ok:function(index){
      console.log('ok',index)

      if(index === true){
        this.$vuetify.theme.dark = true
        this.statusbtndark = true     

      }
      if(index === false){
        this.$vuetify.theme.dark = false
        this.statusbtndark = false
    
      }
    }
   }
  }

</script>
