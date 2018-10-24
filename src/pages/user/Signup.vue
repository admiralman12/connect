
<template>
    <v-app id="signup" class="primary">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 lg4>
              <v-card class="elevation-1 pa-3">
                <v-card-text>
                  <div class="layout column align-center">
                    <img src="@/assets/Logo.png" alt="Comps Connect" width="120" height="120">
                    <h1 class="flex my-4 primary--text">Comps Connect</h1>
                    <p>Already have an account? 
                        <router-link to="/signin">
                          <a>Log in!</a>
                        </router-link>
                    </p>
                  </div>                
                  <v-form ref="form">
                    <v-text-field 
                      name="email" 
                      label="Email" 
                      id="email" 
                      type="email" 
                      v-model="username" 
                      :rules="[checkEmail]"
                      required
                    >
                    </v-text-field>
                    <v-text-field 
                      name="password" 
                      label="Password" 
                      id="password" 
                      type="password" 
                      hint="Password must be 8 characters"
                      v-model="password" 
                      required
                    >
                    </v-text-field>
                    <v-text-field 
                      name="confirmPassword" 
                      label="Confirm Password" 
                      id="confirmPassword" 
                      type="password" 
                      v-model="confirmPassword" 
                      :rules="[comparePasswords]"
                      required
                    >
                  </v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn block color="primary" @click="onSignUp" :loading="loading">Sign Up</v-btn>
                </v-card-actions>
                <v-alert v-if="error" v-model="error" color="error" icon="warning" outline transition="scale-transition">{{error}}</v-alert>
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
      username: '',
      password: '',
      confirmPassword: '',    
      loading: false,
      error: ''  
    }
  },
  computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : true
      },
      checkEmail() {
        return this.username.length == 0 ? 'Email is required' : true
      },
      checkMin() {
        return this.password.length < 8 ? 'Min 8 characters' : true
      },
    },

    methods: {
      onSignUp () {
        if (this.$refs.form.validate()) {
          //this.$store.dispatch('signUserUp', {email: this.username, password: this.password})
          this.loading = true
          fb.auth.createUserWithEmailAndPassword(this.username, this.password).then(user => {
            this.loading = false
            fb.auth.currentUser.sendEmailVerification()
            fb.auth.signOut()
            this.$router.push('/checkEmail')
          })
          .catch(err => {
            console.log(err)
            this.loading = false
            if (err.code == 'auth/invalid-email') {
              err.message = 'Please enter a valid email address.'
            }
            this.error = err.message
          })
        }
      }
    }
}
</script>

<style scoped>
  #signup {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
.v-alert.v-alert--outline {
    border: none !important;
  }
.v-btn {
  max-width: 250px;
}
.v-card__actions, .v-card__title {
  justify-content: center;
}
img {
  -webkit-filter: drop-shadow(2px 2px 2px #1CAEA3);
}
a {
  text-decoration: none
}
</style>
