<template>
  <v-dialog :value="alertToggle" persistent @input="onCancel" :max-width="alertWidth">
    <v-card>
      <v-alert value="true" class="headline" :color="alertType" :icon="alertIcon">
        Warning
      </v-alert>
      <v-card-text v-html="alertMsg"></v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          flat="flat"
          @click="onCancel"
        >
          No
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat="flat"
          @click="onConfirm"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    alertToggle: {
      type: Boolean,
      default: false,
    },
    alertWidth: {
      type: String,
      default: "250",
    },
    alertType: {
      type: String,
      default: 'error'
    },
    alertIcon: {
      type: String,
      default: 'warning'
    },    
    alertMsg: ''
  },
  data () {
    return {
      
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel')
    },
    onConfirm() {
      this.$emit('confirm')
    }
  }
}
</script>