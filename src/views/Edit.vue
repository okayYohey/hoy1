<template>
  <div class="edit-page">
      <form class="uploadPhotoForm">
          <h2>写真のアップロード</h2>
          <input 
            type="file" 
            style="opacity:0" 
            id="uploadPhoto"
            @change="onFileSelected"
            ref="fileInput" 
            >
          <button type="button" @click="$refs.fileInput.click()">Pick File</button>
          <input type="text" id="photoName" placeholder="画像の名前を入力してください">
          <button @="onUpload">アップロード</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'edit',
    data:function(){
        return{
            photoName:'',
            selectedFile: null,
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0]
        },
        onUpload(){
            const fd = new FormData();
            fd.append('image', this.selectedFile, this.selectedFile.name)
            axios.post('http',fd , {
                onUploadProgress: uploadEvent =>{
                    console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
                }
             })
                .then(res => {
                    console.log(res)
                })
            
            
        }
    }
}
</script>

<style>
.uploadPhotoForm{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50vw;
    margin:0 auto;

}
.uploadPhotoForm *{
    margin: 5px auto;
}
</style>