<template>
  <div class="imgContainer" @click="fileUpload">
    <img v-if="showImg" :src="imageSrc">
    <div v-if="!showImg">Upload Image</div>   
    <input @change="uploading" accept="image/*" ref="uploadButton" type="file" name="fileToUpload" id="fileToUpload" style="display:none"/>         
  </div>  
</template>
<script>
export default {
  props: {

  }, 
  data() {
    return {
      decodedImg: null,
      imageToggle: false
    }
  },
  computed: {
    imageSrc() {
      return this.decodedImg
    },
    showImg() {
      return this.imageToggle
    }
  },  
  methods: {
    uploading() {
      var file = this.$refs.uploadButton.files[0]
      console.log('asdasfas')
      this.getBase64(file).then((result) => {
        this.decodedImg = result
      })
    },
    getBase64(file, onLoadCallback) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onload = function() { resolve(reader.result) }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    },
    fileUpload() {
      this.$refs.uploadButton.click()
      this.imageToggle = true
    },
  }
}
</script>
<style scoped>
.imgContainer img
{
  width: 104px;
  height: 104px;
}

.imgContainer 
{
  cursor: pointer;
  text-align: center;
  width:135px; 
  height:104px; 
  overflow:hidden; 
  line-height: 104px; 
  font-weight: 500; 
  border: 1px solid #e4e5e6;
  background-color: #f2f2f3;
}

</style>