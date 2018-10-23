<template>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>     
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Search"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>     
              <v-btn icon>
                <v-icon @click="addProperty" color=primary>add_circle_outline</v-icon>
              </v-btn>         
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="headers"
                :search="search"
                :items="users"
                :rows-per-page-items="[5,10,{text:'All','value':-1}]"
                class="elevation-0"
                item-key="name"
                >
                <template slot="items" slot-scope="props">             
                  <td><a :href="`mailto:${props.item.email}`">{{ props.item.name }}</a></td>
                  <td>{{ props.item.phone }}</td>
                  <td>{{ props.item.jobtitle }}</td>
                  <td>{{ props.item.defaultprop }}</td>
                  <td>{{ props.item.company }}</td>
                  <td class="text-xs-right">
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                      >
                        edit
                      </v-icon>
                      <v-icon
                        small
                        @click="showWarning(props.item)"
                      >
                        delete
                      </v-icon>
                    </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--Confirm Dialog-->
        <app-confirm 
          :alertToggle="alertToggle" 
          :alertMsg="alertMsg"
          alertType="error"
          alertIcon="warning"
          alertWidth="300"
          @cancel="alertToggle = false; selectedProperty = ''"
          @confirm="deleteProperty"
        >
        </app-confirm>
         <!--End Confirm Dialog-->
        <app-user 
        :createToggle="createToggle" 
        dialogWidth="550"
        @cancel="createToggle = false"
        >
      </app-user>
      </v-layout>
    </v-container>
    </template>
    <script>
    import { Users } from '@/api/users';
    import AppConfirm from '@/components/Confirm';
    import AppUser from '@/components/user/User';
    export default {
      components: {
        AppConfirm,
        AppUser
      },
      data() {
        return {
          alertToggle: false,
          alertMsg: '',
          createToggle: false,
          selectedUser: '',
          search: '',
          headers: [
            {
              text: 'Name',
              align: 'left',
              value: 'name'
            },
            { text: 'Phone', value: 'phone' },
            { text: 'Title', value: 'jobtitle' },
            { text: 'Default Property', value: 'defaultprop' },
            { text: 'Company', value: 'company' },
            { text: 'Action', value: 'action', align: 'right' },
          ],
        }
      },
      computed: {
        users () {
          return Users
        }
      },
      methods: {
        showWarning(item) {
          console.log('selected ', this.selectedUser)
          this.selectedUser = item
          this.alertMsg = 'Are you sure you want to permanently delete <b>' + this.selectedUser.name + '</b>?'
          this.alertToggle = true
        },
        addProperty() {
          this.createToggle = true
          //this.$router.push('/add-property')
        },
        deleteProperty() {
          console.log('deleting ', this.selectedUser.name)
          this.selectedUser = ''
          this.alertMsg = ''
          this.alertToggle = false
        }
      }
    }
    </script>
    <style scoped>
    a {
      text-decoration: none
    }
    </style>