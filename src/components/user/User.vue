<template>
    <v-dialog :value="createToggle" :scrollable=true @input="onCancel" persistent :fullscreen="$vuetify.breakpoint.xsOnly" :max-width="dialogWidth">
      <div ref="scrollElem" style="height:0px; width:0px"></div>
      <v-card>
        <v-toolbar card class="tbar tbarheader">
          <div class="heading">Add User</div>
          <v-spacer></v-spacer>
          <v-btn icon>
              <v-icon class="heading grey--text text--darken-4" @click="onCancel">close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text >
          <v-form ref="form" enctype="multipart/form-data">
            <v-container>
              <v-layout row wrap > 
                  <v-subheader class="app-subheader grey--text text--darken-1 mx-2 mb-4 pa-0">
                    User Info
                  </v-subheader>
                  <v-flex xs6 class="mb-4">
                    <image-upload></image-upload>
                  </v-flex> 
                  <v-flex xs12>
                      <v-text-field
                        label="Name"
                        outline
                        v-model="model.name"
                        class="app-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12>
                      <v-text-field
                        label="Email"
                        outline
                        v-model="model.email"
                        class="app-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>                    
                  <v-flex xs12>
                      <v-text-field
                        label="Job Title"
                        outline
                        v-model="model.jobtitle"
                        class="app-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                      <v-text-field
                        label="Phone"
                        outline
                        mask="phone"
                        v-model="model.phone"
                        class="app-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex>  
                  <v-flex xs12>
                      <v-text-field
                        label="Company"
                        outline
                        v-model="model.jobtitle"
                        class="app-input"
                        :rules="[rules.reqRule]"
                      >
                    </v-text-field>
                  </v-flex> 
                  <v-flex xs12>
                      <v-autocomplete
                      :items="properties"
                      item-text="name"
                      item-value="name"
                      label="Default Property"
                      outline
                      v-model="model.defaultproperty"
                      class="app-input"
                      :rules="[rules.reqRule]"
                      >                    
                    </v-autocomplete>
                  </v-flex>                                                                                                                                                                 
                </v-layout>
              </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions class="btbar justify-end tbarheader"> 
          <v-btn
            depressed
            color="bgaccent"
            @click="onCancel"
            class="mr-2 my-1"
          >
          Cancel
          </v-btn> 
          <v-btn
            depressed
            color="primary"
            @click="onSave"
            class="mr-4 my-1"
          >
          Add User
          </v-btn>           
        </v-card-actions>
      </v-card>
    </v-dialog>
    </template>
    <script>
    import User from '@/models/user';
    import ImageUpload from '@/components/shared/ImageUpload';
    import { Properties } from '@/api/selects';
      
    
    export default {
      components: {
        ImageUpload
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
            properties: Properties,
            model: new User,
            imageUploaded: false,
            rules: {
              reqRule: v => !!v && v.trim().length > 0 || '',
              numRule: v => !!v && Number.isInteger(v) || 'Value is not a number',
            }  
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
          
          this.model = new User
          console.log('Cancelling')
          console.log(this.model)
          this.$refs.form.reset()
          this.$emit('cancel')
        },
        onSave() {
          this.clear()
    
          if (this.$refs.form.validate()) {
            this.model = new User
            this.$emit('cancel')
            console.log(JSON.stringify(this.model, null, 4))
          }
        },
        clear() {
          //scroll dialog to top
          var elem = this.$refs.scrollElem
          elem.scrollIntoView()
        },


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
.btbar
{
  border-top: 1px solid #c8ced3 !important
}

</style>
              