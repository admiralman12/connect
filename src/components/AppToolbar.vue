<template>
<div id="appToolbar">
  <v-toolbar color="white" class="tbar" flat dense light fixed app>
    <!-- add to v-toolbar-side-icon  v-if="userAuthenticated"-->
    <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <div class="subheading">Benson Downs <v-icon>keyboard_arrow_down</v-icon></div>
    <!--<v-autocomplete
    :items="['a', 'b','c']"
    label="Set Property"
    outline
    flat
    single-line
    class="propertyInput"
    >                    
    </v-autocomplete> -->

    <v-spacer></v-spacer>
    
    <!-- <v-toolbar-items class="hidden-xs-only"> -->
        <div v-if="userAuthenticated" >

            <v-btn icon to="/search" color="primary--text">
            <v-icon>search</v-icon>
            </v-btn>   
            <v-btn icon to="/properties" color="primary--text">
            <v-icon>notifications_none</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>account_circle</v-icon>
            </v-btn>
            <v-btn icon @click="signUserOut">
                <v-icon>power_settings_new</v-icon>
            </v-btn>
          </div>
          <div v-if="!userAuthenticated">
            <v-btn flat to="/signin">
            <v-icon left dark>exit_to_app</v-icon> Sign In
            </v-btn>
            <v-btn flat  to="/signup">
            <v-icon left dark>person_add</v-icon> Sign Up
            </v-btn>
          </div>
  </v-toolbar>
    
  <v-navigation-drawer 
  fixed 
  app
  dark
  width="250"
  v-model="drawer"
  class="menuaccent"
  >
  <v-toolbar dense flat class="tbar menuaccent" style="border-bottom: 1px solid #c8ced3 !important">
      <img src="@/assets/Logo.png" class="ml-1" style= "cursor: pointer;" height="32" alt="">
      <v-toolbar-title class="ml-2 logotitle"> 
          <router-link to="/" tag="span" style="cursor: pointer; font-size: 20px; line-height: 28">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn flat icon color="white" class="hidden-lg-and-up" @click.stop="drawer = !drawer">
        <v-icon small>close</v-icon>
      </v-btn>
  </v-toolbar>
  <v-list>
    <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        active-class="menuactive--text"
    >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>

</v-navigation-drawer>  
</div>
</template>

<script>
export default {
  name: 'app-toolbar',
  data: () => {
    return {
        drawer: true,
        title: 'Comps Connect'
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {icon: 'exit_to_app', title: 'Sign In', link: '/signin'},
        {icon: 'person_add', title: 'Sign Up', link: '/signup'}
      ]

      if (this.userAuthenticated) {
        menuItems = [
          {icon: 'home', title: 'Home', link: '/'},
          {icon: 'business', title: 'Properties', link: '/properties'},
          {icon: 'link', title: 'Connections', link: '/connections'},
          {icon: 'star', title: 'Ratings',  link: '/ratings'},        
          {icon: 'list', title: 'Activity', link: '/activity'},
          {icon: 'bar_chart', title: 'Reports', link: '/reports'},
          {icon: 'notifications', title: 'Notifications',link: '/notifications'},
          {icon: 'account_circle', title: 'Profile',link: '/profile'},
          {icon: 'group', title: 'Users',link: '/users'}
        ]
      }
      return menuItems
    },            
    userAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
  },
  methods: {
    signUserOut() {
      this.$store.dispatch('signUserOut')
      this.$router.push('/signin')
    }
  }
}
</script>
<style scoped>
.logotitle {
  font-size: 26px;
  font-weight: 400
}
.tbar
{
  border-bottom: 1px solid #c8ced3 !important
}

.propertyInput >>> i {
        font-size: 16px;
    }

.propertyInput >>> label {
    font: 500 12px;
    color: #33373E;
    line-height: 16px;
    top: 3px;
}

.propertyInput >>> input {
    height: 16px;
    font: 500 12px;
    color: #33373E;
    line-height: 16px;
}
</style>