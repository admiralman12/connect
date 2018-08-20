<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <!-- <v-toolbar-items class="hidden-xs-only"> -->
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon to="/properties">
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer 
      temporary fixed
      v-model="drawer"
      class="drawer"
      dark
    >
      <v-list >
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
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
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
        icon: 'home',
        title: 'Home',
        link: '/'
        },
        {
        icon: 'business',
        title: 'Properties',
        link: '/properties'
        },
        {
        icon: 'link',
        title: 'Connections',
        link: '/connections'
        },
        {
        icon: 'star',
        title: 'Ratings',
        link: '/properties'
        },        
        {
        icon: 'list',
        title: 'Activity',
        link: '/activity'
        },
        {
        icon: 'bar_chart',
        title: 'Reports',
        link: '/reports'
        },
        {
        icon: 'notifications',
        title: 'Notifications',
        link: '/notifications'
        },
        {
        icon: 'account_circle',
        title: 'Profile'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Connect'
    }
  }
}
</script>
<style>
.drawer {
  background-color: #424242 !important;
}
</style>
