<template>
    <v-app id="emailverification" class="primary">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 lg4>
              <v-card class="elevation-1 pa-3">
                <v-card-text>
                  <div class="layout column align-center">
                    <img src="@/assets/Logo.png" alt="Comps Connect" width="120" height="120">
                    <h1 class="flex my-4 primary--text">Comps Connect</h1>
                  </div>
                  <p>
                      We’ve sent an email to you with a link to activate your account. If you haven't received the email within a few minutes, please check your spam folder.
                  </p>       
                </v-card-text>
                <v-card-title>
                    <router-link to="/signup">
                      Didn't receive an email?
                    </router-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </template> 

<style>
    #emailverification {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
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