<template>
  <v-alert error dismissible outline @input="onClose" value="true">
    Alert Message
  </v-alert>
</template>

<script>
export default {
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>
<style scoped>
  .v-alert.v-alert--outline {
    border: none !important;
    text-align: center
  }
</style>