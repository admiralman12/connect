<template>
  <v-app id="forgot" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text class="layout column align-center"> 
                <img src="@/assets/Logo.png" alt="Comps Connect" width="120" height="120">
                <h1 class="flex my-4 primary--text">Comps Connect</h1>
              </v-card-text>
              <div v-if="!resetSuccess"> <!--Reset Form-->
                <v-card-text>
                  <div class="layout column align-center">
                    <p>Return to Login?
                        <router-link to="/signin">
                          <a>Click Here!</a>
                        </router-link>
                    </p>
                    <p>
                      Enter your email address and we'll send <br>you instructions to reset your password.
                    </p>   
                  </div>      
                  <v-form>
                    <v-text-field append-icon="person" @ name="login" label="Email" type="text" v-model="username"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn block color="primary" @click="onReset" :loading="loading">Reset Password</v-btn>
                </v-card-actions> 
                <v-alert v-if="error" v-model="error" color="error" icon="warning" outline transition="scale-transition">{{errorMsg}}</v-alert>
              </div> <!--End Reset Form-->
              <div v-if="resetSuccess"><!--Reset Completed-->
                <v-card-text>
                  <div class="layout column align-center">
                    <p style="text-align: center">
                        Success!<br>
                        We've sent an email to {{username}} with password reset instructions.<br><br>
                        If the email doesn't show up soon, check your spam folder. 
                    </p>  
                  </div>       
                </v-card-text>
                <v-card-actions>
                  <v-btn block color="primary" @click="goToSignIn">Return To Login</v-btn>
                </v-card-actions> 
              </div><!--End Reset Completed-->
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
      errorMsg: '',
      resetSuccess: false,
      loading: false
    }
  },
  computed: {       
    error () {
      return this.errorMsg
    },      
  },
  methods: {
    onReset() {
      this.loading = true
      fb.auth.sendPasswordResetEmail(this.username).then(() => {
          this.username = ''
          this.loading = false
          this.resetSuccess = true
          this.errorMsg = ''
      }).catch(err => {
            this.loading = false
            if (err.code == 'auth/user-not-found')
            {
              this.errorMsg = 'Email address not found'
            } else if (err.code = 'auth/invalid-email') {
              this.errorMsg = 'Invalid email address'
            } else {
              this.errorMsg = 'Unknown error'
            }
      })
    },
    goToSignIn() {
      this.resetSuccess = false
      this.$router.push('/signin')
    }
  }
}
</script>
<style scoped>
#forgot {
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

    