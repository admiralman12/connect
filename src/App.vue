<template>
  <div id="app">
    <template v-if="$route.meta.auth">
        <v-app>
            <app-toolbar></app-toolbar>
            <v-content>
                <page-header></page-header>
                <div class="page-wrapper">
                  <router-view></router-view>
                </div>  
            </v-content>
          </v-app>           
    </template>
    <template v-else>
       <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>    
  </div>
</template>

<script>
import AppToolbar from '@/components/AppToolbar';
import PageHeader from '@/components/PageHeader';
export default {
  components: {
    AppToolbar, 
    PageHeader
  },   
}
</script>
<style >

html {
  font-size:100%;
}

</style>
