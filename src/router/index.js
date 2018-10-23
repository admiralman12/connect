import Vue from 'vue'
import Router from 'vue-router'
import { store } from '@/store/store'
import firebase from 'firebase/app'
import { runInNewContext } from 'vm';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
//Protected Routes
    {
      path: '/',
      meta: {
        auth: true,
        title: 'Dashboard - Connect',
        pageHeader: 'Dashboard'
      },
      name: 'Dashboard',
      component: () => import(
        '@/pages/Dashboard.vue'
      )
    },
    {
      path: '/search',
      meta: {
        auth: true
      },
      name: 'Search',
      component: () => import(
        '@/pages/property/SearchProperties.vue'
      ) 
    },
    {
      path: '/properties',
      meta: {
        auth: true,
        title: 'Properties - Connect',
        pageHeader: 'Properties'
      },
      name: 'Properties',
      component: () => import(
        '@/pages/property/Properties.vue'
      )
    },
/*     {
      path: '/add-property',
      meta: {
        auth: true,
        title: 'Add Property - Connect',
        pageHeader: 'Add Property'
      },
      name: 'Add Property',
      component: () => import(
        '@/pages/property/CreateProperty.vue'
      )
    },   */        
    {
      path: '/users',
      meta: {
        auth: true,
        title: 'Users - Connect',
        pageHeader: 'Users'
      },
      name: 'Users',
      component: () => import(
        '@/pages/user/Users.vue'
      )
    },
//Unprotected Routes
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(
        '@/pages/user/Signup.vue'
      )
    },
    {
      path: '/checkemail',
      name: 'EmailVerfication',
      component: () => import(
        '@/pages/user/EmailVerification.vue'
      )
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import(
        '@/pages/user/Signin.vue'
      )
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: () => import(
        '@/pages/user/Forgot.vue'
      )
    },    
    {
      path: '*',
      name: '404',
      component: () => import(
        '@/pages/NotFound.vue'
      )
    },
    {
      path: '/403',
      name: 'AccessDenied',
      component: () => import(

        `@/pages/Deny.vue`
      )
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  //reset any errors in the store
  store.commit('clearError')
  
  //auth guard
  const requiresAuth = to.matched.some(x => x.meta.auth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/signin')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }

  //update document title
  const docTitle = to.meta.title
  if (docTitle)
  {
    document.title = docTitle
  } else {
    document.title = 'Comps Connect'
  }
  
  //TODO Add Meta Tags to Document for SEO?

})


export default router

