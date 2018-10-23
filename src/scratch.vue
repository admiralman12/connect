<template>
    <v-dialog :value="createToggle" @input="onCancel" persistent :fullscreen="$vuetify.breakpoint.xsOnly" :max-width="dialogWidth">
      <div ref="scrollElem" style="height:0px; width:0px"></div>
      <v-card>
        <v-toolbar card class="tbar bgaccent">
          <div class="heading">Add Property</div>
          <v-spacer></v-spacer>
          <v-btn icon>
              <v-icon class="heading grey--text text--darken-4" @click="onCancel">close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-layout row wrap>
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                    Basics
                  </v-subheader>
                  <v-flex>
                    <add-image></add-image>
                  </v-flex>
                  <v-flex xs12>
                      <v-text-field
                        label="Property Name"
                        outline
                        v-model="model.propname"
                        class="pty-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                      <v-text-field
                        label="Units"
                        outline
                        v-model="model.units"
                        class="pty-input an-number"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                      <v-text-field
                        label="Sq Ft"
                        outline
                        v-model="model.sqft"
                        class="pty-input an-number"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                      <v-text-field
                        label="Year Built"
                        outline
                        v-model="model.yearbuilt"
                        class="pty-input"
                        mask="####"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Owner"
                        outline
                        v-model="model.owner"
                        class="pty-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>              
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Mgmt Company"
                        outline
                        v-model="model.mgmtcompany"
                        class="pty-input"
                        :rules="[rules.reqRule]"
                      ></v-text-field>
                  </v-flex>  
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="propertyTypes"
                      label="Property Type"
                      outline
                      v-model="model.propertytype"
                      class="pty-input"
                      :rules="[rules.reqRule]"
                      >                    
                    </v-autocomplete>
                  </v-flex>              
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="exteriorTypes"
                      label="Exterior"
                      outline
                      v-model="model.exterior"
                      class="pty-input"
                      :rules="[rules.reqRule]"
                      >                    
                    </v-autocomplete>
                  </v-flex>   
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                      Contact
                    </v-subheader> 
                    <v-flex xs12 sm6>
                        <v-text-field
                          label="Primary Contact"
                          outline
                          v-model="model.contact"
                          class="pty-input"
                          :rules="[rules.reqRule]"
                        >
                      </v-text-field>
                    </v-flex> 
                    <v-flex xs12 sm6>
                        <v-text-field
                          label="Contact Email"
                          outline
                          v-model="model.contactemail"
                          class="pty-input"
                          :rules="[rules.reqRule]"
                        >
                      </v-text-field>
                    </v-flex> 
                    <v-flex xs12 sm6>
                        <v-text-field
                          label="Property Email"
                          outline
                          v-model="model.propertyemail"
                          class="pty-input"
                          :rules="[rules.reqRule]"
                        >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                          label="Phone"
                          outline
                          class="pty-input"
                          mask="phone"
                          v-model="model.phone"
                        >
                      </v-text-field>
                    </v-flex>                        
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                    Address
                  </v-subheader>
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Country"
                        outline
                        disabled
                        placeholder="United States"
                        v-model="model.country"
                        class="pty-input"
                      >
                    </v-text-field>
                  </v-flex>              
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Street"
                        outline
                        v-model="model.street"
                        class="pty-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="City"
                        outline
                        v-model="model.city"
                        class="pty-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>              
                  <v-flex xs12 sm6>
                    <v-autocomplete
                    :items="states"
                    item-text="name"
                    item-value="abbreviation"
                    label="State"
                    outline
                    v-model="model.state"
                    class="pty-input"
                    :rules="[rules.reqRule]"
                    >                    
                    </v-autocomplete>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Zip Code"
                        outline
                        v-model="model.zip"
                        class="pty-input"
                        mask="#####"
                        :rules="[rules.reqRule]"
                      >
                      </v-text-field>
                  </v-flex> 
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                      Fees/Deposits
                  </v-subheader> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Application"
                        outline
                        v-model="model.appfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Administrative"
                        outline
                        v-model="model.adminfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Refundable Deposit"
                        outline
                        v-model="model.refdeposit"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Non-refundable Deposit"
                        outline
                        v-model="model.nonrefdeposit"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                      Pet Fees
                  </v-subheader>
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Refundable Dog"
                        outline
                        v-model="model.refdogfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Non-refundable Dog"
                        outline
                        v-model="model.nonrefdogfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Refundable Cat"
                        outline
                        v-model="model.refcatfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Non-refundable Cat"
                        outline
                        v-model="model.nonrefcatfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>  
                  </v-flex>                   
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Refundable Other"
                        outline
                        v-model="model.refotherfee"
                        class="pty-input an-currency"
                      ></v-text-field>
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Non-refundable Other"
                        outline
                        v-model="model.nonrefotherfee"
                        class="pty-input an-currency"
                      >
                    </v-text-field>                                 
                  </v-flex> 
                  <v-flex xs12 sm6>
                      <v-text-field
                        label="Pet Rent"
                        outline
                        v-model="model.petrent"
                        class="pty-input an-currency"
                      >
                    </v-text-field>                                 
                  </v-flex>
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                      Floor Plans
                  </v-subheader> 
                  <v-subheader class="pty-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                      Community Amenities
                  </v-subheader>                                                                                       
                  </v-layout>
              </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions class="justify-end"> 
          <v-btn
            depressed
            color="grey lighten-2"
            @click="onCancel"
            class="mr-2"
          >
          Cancel
          </v-btn> 
          <v-btn
            depressed
            color="primary"
            @click="onSave"
            class="mr-4"
          >
          Add Property
          </v-btn>           
        </v-card-actions>
      </v-card>
    </v-dialog>
    </template>
    <script>
    import Property from '@/models/property';
    import AddImage from '@/components/FileUpload';
    import { PropertyTypes, ExteriorTypes, States } from '@/api/selects';
    import AutoNumeric from 'autonumeric';
    
    
    export default {
      components: {
        AddImage
      },
      props: {
        createToggle: {
          type: Boolean,
          default: false,
        },
        dialogWidth: {
          type: String,
          default: "400",
        }, 
      }, 
      data () {
          return {
            fullScreen: false,
            propertyTypes: PropertyTypes,
            exteriorTypes: ExteriorTypes,
            states: States,
            model: new Property,
            rules: {
              reqRule: v => !!v && v.trim().length > 0 || '',
              numRule: v => !!v && Number.isInteger(v) || 'Value is not a number',
            },
            anNumber: '',
            anCurrency: ''     
          }
      },
      computed: {
      },
      watch: {
        createToggle() {
          console.log('reseting')
            this.$refs.form.reset()
        }
      },  
      methods: {
        onCancel() {
          this.clear()
          
          this.model = new Property
          console.log('Cancelling')
          console.log(this.model)
          this.$refs.form.reset()
          this.$emit('cancel')
        },
        onSave() {
          this.clear()
    
          if (this.$refs.form.validate()) {
            this.model = new Property
            this.$emit('cancel')
            console.log(JSON.stringify(this.model, null, 4))
          }
        },
        clear() {
          //scroll dialog to top
          var elem = this.$refs.scrollElem
          elem.scrollIntoView()
    
          //clear Autonumeric listeners
          this.anNumber.map((v) => v.clear() )
          this.anCurrency.map((v) => v.clear() )
        }
      },
      updated() {
        
      },
      mounted() {
        this.anNumber = new AutoNumeric.multiple('.an-number div div div input', { digitGroupSeparator : ',', decimalPlaces: 0 })
        this.anCurrency = new AutoNumeric.multiple('.an-currency div div div input', { 
          currencySymbol : '$',
          digitGroupSeparator : ',', 
          decimalPlaces: 0 
        })
      }
    }
    </script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    .flex {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }
    .heading {
      font-size: 18px
    }
    .tbar
    {
      border-bottom: 1px solid #c8ced3 !important
    }
    
    </style>
              