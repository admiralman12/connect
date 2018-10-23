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
            :items="properties"
            :rows-per-page-items="[5,10,{text:'All','value':-1}]"
            class="elevation-0"
            item-key="name"
            >
            <template slot="items" slot-scope="props">             
              <td>{{ props.item.name }}</td>
              <td><a :href="`mailto:${props.item.mgremail}`">{{ props.item.mgr }}</a></td>
              <td>{{ props.item.units }}</td>
              <td>{{ props.item.sqft }}</td>
              <td>{{ props.item.psqft }}</td>
              <td>{{ props.item.occ }}%</td>
              <td>{{ props.item.leased }}%</td>
              <td>{{ props.item.mgmt }}</td>
              <td>{{ props.item.owner }}</td>
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
    <create-property 
      :createToggle="createToggle" 
      dialogWidth="550"
      @cancel="createToggle = false"
    >
    </create-property>
     <!--End Confirm Dialog-->
  </v-layout>
</v-container>
</template>
<script>
import { Properties } from '@/api/properties';
import CreateProperty from '@/components/property/CreateProperty';
import AppConfirm from '@/components/Confirm';
export default {
  components: {
    CreateProperty,
    AppConfirm
  },
  data() {
    return {
      alertToggle: false,
      alertMsg: '',
      createToggle: false,
      selectedProperty: '',
      search: '',
      headers: [
        {
          text: 'Community',
          align: 'left',
          value: 'name'
        },
        { text: 'Manager', value: 'mgr' },
        { text: 'Units', value: 'units' },
        { text: 'SqFt', value: 'sqft' },
        { text: '$/SqFt', value: 'psqft' },
        { text: 'Occ %', value: 'occ' },
        { text: 'Lease %', value: 'lease' },
        { text: 'Mgmt Company', value: 'mgmt' },
        { text: 'Owner', value: 'owner' },
        { text: 'Action', value: 'action', align: 'right' },
      ],
    }
  },
  computed: {
    properties () {
      return Properties
    }
  },
  methods: {
    showWarning(item) {
      console.log('selected ', this.selectedProperty)
      this.selectedProperty = item
      this.alertMsg = 'Are you sure you want to permanently delete <b>' + this.selectedProperty.name + '</b>?'
      this.alertToggle = true
    },
    addProperty() {
      this.createToggle = true
      //this.$router.push('/add-property')
    },
    deleteProperty() {
      console.log('deleting ', this.selectedProperty.name)
      this.selectedProperty = ''
      this.alertMsg = ''
      this.alertToggle = false
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('route enter')
    next()
  }
}
</script>
<style scoped>
a {
  text-decoration: none
}
</style>