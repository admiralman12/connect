<template>
  <div id="Dashboard">
    <v-container grid-list-xl fluid>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4 :key="n" v-for="n in 3">
              <v-card height=400>
                <v-toolbar flat color="white">
                  <v-toolbar-title>Title</v-toolbar-title>
                </v-toolbar>
                <v-divider></v-divider>
              </v-card>
          </v-flex>

        </v-layout>
    </v-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
  },
  methods: {

  }
}
</script>