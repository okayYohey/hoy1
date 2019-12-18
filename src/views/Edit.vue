<template>
  <div class="edit">
      <!-- <photo-upload></photo-upload>
      <data-upload></data-upload> -->
    <PhotoUpload></PhotoUpload>
    <DataUpload></DataUpload>
  </div>
</template>

<script>
import PhotoUpload from '@/components/PhotoUpload.vue'
import DataUpload from '@/components/DataUpload.vue'
export default {
    name: 'edit',
    components:{
        PhotoUpload,
        DataUpload
    }
}
</script>

<style>
.edit{
   background-color: aliceblue 
}
</style>