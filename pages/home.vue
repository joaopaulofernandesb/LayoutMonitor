<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >

    

                    <v-list dense shaped>
        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
            
          </v-list-item-content>
        </v-list-item>
        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Config</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link to="/" >
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item link to="/app" >
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Demo App</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list>
     
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      class="barra"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="color:#fff;" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down" style="color:#fff;">Air Ticket Beta</span>
      </v-toolbar-title>
      
      <v-spacer />
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon style="color:#fff">mdi-bell</v-icon>
      </v-btn>

       <v-btn icon
        @click="ok(showNav = !showNav)"
      >
          <div v-if="statusbtndark === true">
              <v-icon style="color:#fff">mdi-lightbulb-outline</v-icon>
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
        <v-row
          align="center"
          justify="center"
        >
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
        
        </v-col>

 
      </v-row>


 
    </v-row>

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
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    
      </v-container>
    </v-content>
      <v-footer
      :inset="true"
      app
    >
    
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>


      
    
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
      statusbtndark:true,
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
        localStorage.setItem('contM',this.cards)
        



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
<style>
.barra{
    color: #ffffff;
   	background: -webkit-linear-gradient(to right, #1488CC, #2B32B2);
	background: linear-gradient(to right, #1488CC, #2B32B2);
}
.btnadd{
 	background: -webkit-linear-gradient(to right, #1488CC, #1488CC);
  background: linear-gradient(to right, #1488CC, #1488CC);
  
}

</style>
