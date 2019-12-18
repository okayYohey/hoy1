<template>
  <div class="edit-page">
    <h2 class="title" @click="open = !open">写真のアップロード▽</h2>
    <div :class="{ closed: open}" class="photo-upload">
        <form class="uploadPhotoForm">
            <input 
            type="file" 
            id="uploadPhoto"
            ref="fileInput"
            @change="previewImage"
            accept="image/*"
            >
            <button type="button" @click="$refs.fileInput.click()">Pick File</button>
        </form>
        <div class="progress">
            <p>Progress: {{uploadValue.toFixed(1)+"%"}}
            <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
        </div>
        <div class="sampleImg" v-if="imageData!=null">
            <img class="review" :src="picture">
            <button class="upload-btn" @click="onUpload">Upload</button>
            <p v-show="pushedUpload">アップロードしています</p>
            <p v-show="compUpload">アップロードできました</p>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'photo-upload',
    data:function(){
        return{
            pickupImg: false,
            imageData: null,
            picture: null,
            uploadValue: 0,
            pushedUpload: false,
            compUpload: false,
            open: true
        }
    },
    methods:{
        previewImage(event) {
            this.uploadValue=0;
            this.picture=null;
            this.imageData = event.target.files[0];
      },
       onUpload(){
            this.pushedUpload = true;
            this.compUpload = false;
            this.picture=null;
            const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{alert(error.message)},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.picture =url;
                this.pushedUpload = false;
                this.compUpload = true;
            });
            }
        );
        }
    }
}
</script>

<style>
.closed{
    position: relative;
    top: 500px;
    transition: .9s;
}
.photo-upload{
    position: relative;
    transition: .8s;   
    top: 0; 
    margin: 30px 0 0;
}
.title{
    display: block;
    height:70px;
    position: relative;
    cursor: pointer;
}
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
.progress{
    background-color: azure;
    padding: 20px
}
.sampleImg{
    background-color: antiquewhite;
    max-width: 680px;
    min-height: 300px;
    height: auto;
    margin:30px auto;
    display: flex;
    flex-direction: column;
}
.review{
    display: block;
    width:90vw;
    margin:30px auto
}
.upload-btn{
    width:100px;
    display: block;
    margin: 0 auto;
}
</style>