<template>
<div class="edit-page">
  <div class="edit">
    <photo-upload></photo-upload>
    <data-upload></data-upload>
  </div>
  <!-- <div class="show-data">
    <show-data></show-data>
  </div> -->
  <div class="show-data">
    <show-data2></show-data2>
  </div>
  <div class="upload-data">
    <upload-data></upload-data>
  </div>
</div>
</template>

<script>
import PhotoUpload from '@/components/PhotoUpload.vue'
import DataUpload from '@/components/DataUpload.vue'
import ShowData2 from '@/components/ShowData2.vue'
import UploadData from '@/components/UploadData.vue'

export default {
    name: 'edit',
    components:{
        'photo-upload':PhotoUpload,
        'data-upload':DataUpload,
        'upload-data': UploadData,
        'show-data2':ShowData2,
    }
}
</script>

<style>
.edit{
   background-color: aliceblue;
   margin: 3vw auto;

}
.show-data{
  margin: 3vw auto;

}
</style>