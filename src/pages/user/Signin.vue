<template>
  <v-app id="signin" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/Logo.png" alt="Comps Connect" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Comps Connect</h1>
                  <p>Need an account? 
                      <router-link to="/signup">
                        <a>Create one!</a>
                      </router-link>
                  </p>
                </div>                
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Email" type="text" v-model="username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" @click="onSignIn" :loading="loading">Login</v-btn>
              </v-card-actions>
              <v-card-title>
                  <router-link to="/forgot">
                    Forgot Password?
                  </router-link>
              </v-card-title>
              <v-alert v-if="error" v-model="error" color="error" icon="warning" outline transition="scale-transition">{{error.message}}</v-alert>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>    
<script>

const fb = require('@/firebaseConfig.js')

export default {
  data() {
    return {
      username: 'cwmancini@gmail.com',
      password: 'admiral12',
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('signUserIn', {email: this.username, password: this.password})
    }
  }
}
</script>
<style scoped>
#signin {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
img {
  -webkit-filter: drop-shadow(2px 2px 2px #1CAEA3);
}
.v-btn {
  max-width: 250px;
}
.v-card__actions, .v-card__title {
  justify-content: center;
}
a {
  text-decoration: none
}
</style>
  