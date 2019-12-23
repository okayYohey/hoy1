<template>
    <div class="upload-data">
      <h2>データの登録</h2>
    <ul class="collection">
        <li class="collection-item"></li>
    </ul>
    <div class="wrap-form">
        <form-wizard
            title="サイトの中身作成" 
            subtitle=""
            nextButtonText="次へ" 
            backButtonText="戻る"
            @on-complete="onUpload" 
            finish-button-text="完了"
            shape="tab"
            color="#9b59b6"
        >
            <tab-content>
                <div class="input-group">
                    <label for="commmon_site_name">サイトの名前</label><input required v-model="inputDataObjects.data_sp_0000" type="text" id="commmon_site_name">
                </div>
                <div class="input-group">
                    <label for="common_header">ヘッダー</label><input required v-model="inputDataObjects.data_sp_0001" type="text" id="common_header">
                </div>
                <div class="input-group">
                    <label for="top_welcome">ウェルカムメッセージ</label><input required v-model="inputDataObjects.data_sp_013" type="text" id="top_welcome">
                </div>
            </tab-content>
            <tab-content>
                <div class="input-group">
                <label for="sp_first_welcome">写真のページのウェルカムメッセージ</label><input required v-model="inputDataObjects.data_sp_101" type="text" id="sp_first_welcome">
                </div>
                <div class="input-group">
                    <label for="data_sp_111_img">カードの写真</label><input type="file" id="data_sp_111_img">
                </div>
                <div class="input-group">
                    <label for="data_sp_1110">カードのタイトル</label><input required v-model="inputDataObjects.data_sp_1110" type="text" id="data_sp_1110">
                </div>
                <div class="input-group">
                    <label for="data_sp_1111">カードの文章</label><input required v-model="inputDataObjects.data_sp_1111" type="text" id="data_sp_1111">
                </div>
            </tab-content>
            <tab-content>
                <div class="input-group">
                    <label for="data_sp_201">道のりのウェルカムメッセージ</label><input required v-model="inputDataObjects.data_sp_201" type="text" id="data_sp_201">
                </div>
                <div class="input-group">
                    <label for="data_sp_211">いつから、何日？</label><input required v-model="inputDataObjects.data_sp_211" type="date" id="data_sp_211">
                </div>
                <div class="input-group">
                    <label for="data_sp_212">語尾</label><input required v-model="inputDataObjects.data_sp_212" placeholder="日！" type="text" id="data_sp_211">
                </div>
            </tab-content>
            <tab-content>
                <div class="input-group">
                    <label for="data_sp_301">てがみページのウェルカムメッセージ</label><input required v-model="inputDataObjects.data_sp_301" type="text" id="data_sp_301">
                </div>
                <div class="input-group">
                    <label for="data_sp_311">てがみ</label><textarea required v-model="inputDataObjects.data_sp_311" type="text" id="data_sp_311"/>
                </div>
            </tab-content>
        </form-wizard>
    </div>
    <div class="sample">
        <ul>
            <li v-for="inputDataObject in inputDataObjects" v-bind:key="inputDataObject">{{inputDataObject }}</li>
        </ul>
    </div>
      <i class="fa fa-plus" @click="onUpload"></i>
      {{ currentUser }}
  </div>
</template>

<script>
import "firebase/firestore";
import { db } from './firebase';
import firebase from 'firebase'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    name:'upload-data',
    components: {
      'form-wizard': FormWizard,
      'tab-content': TabContent
    },
    data(){
        return{
            currentUser: firebase.auth().currentUser.email,
            // collectionRefUser:db.collection(this.currentUser),
            collectionRefUser:db.collection('user'),
            docRef: [],
            docDatas:[],
            inputDataObjects:{
                // common page data            
                data_sp_0000: '',
                data_sp_0001: null ,
                // top pgae data 
                    // data_sp_001: null ,button
                    // data_sp_011: null ,
                    // data_sp_012: null ,
                data_sp_013: null ,
                // 1st pgae data 
                data_sp_101: null ,
                // card
                data_sp_1110: null ,
                data_sp_1111: null ,
                // data_sp_1120: null ,
                // data_sp_1121: null ,
                // 2nd pgae data 
                data_sp_201: null ,
                data_sp_211: null ,
                data_sp_212: "日！" ,
                // data_sp_221: null ,
                // data_sp_222: "日！" ,
                // data_sp_231: null ,
                // data_sp_232: "日！" ,
                // 3rd pgae data 
                data_sp_301: null ,
                data_sp_311: null ,
                
            }
        }
    },
    created(){
        this.docDatas = this.collectionRefUser.get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                console.log(doc.id , '=>' , doc.data())
                
            })
           return querySnapshot.doc
        })
        console.log(this.currentUser)
    },
    methods:{
        onUpload(){
            db.collection(this.currentUser).doc("PAGES").set({
                commmon_site_name:this.inputDataObjects.data_sp_0000,
                common_header:this.inputDataObjects.data_sp_0001,
                top_welcome: this.inputDataObjects.data_sp_013,
                // top_button1: this.inputDataObjects.data_sp_011,
                // top_button2: this.inputDataObjects.data_sp_012,
                // top_button3: this.inputDataObjects.data_sp_013,
                sp_first_welcome: this.inputDataObjects.data_sp_101,
                sp_first_card:[
                    this.inputDataObjects.data_sp_1110,//number=>{ page,contents order in the page, content order in the contents, 0=title 1=paragrah}
                    this.inputDataObjects.data_sp_1111,
                    // this.inputDataObjects.data_sp_1120,
                    // this.inputDataObjects.data_sp_1121,
                    // this.inputDataObjects.data_sp_1130,
                    // this.inputDataObjects.data_sp_1131,
                ],
                sp_second_welcome: this.inputDataObjects.data_sp_201,
                sp_second_sentences1:[this.inputDataObjects.data_sp_211,this.inputDataObjects.data_sp_212],
                // sp_second_sentences2:[this.inputDataObjects.data_sp_221,this.inputDataObjects.data_sp_222],
                // sp_second_sentences3:[this.inputDataObjects.data_sp_231,this.inputDataObjects.data_sp_232],
                sp_third_welcome:this.inputDataObjects.data_sp_301,
                sp_third_letters:this.inputDataObjects.data_sp_311,
                });
            // db.collection(this.currentUser).doc("PROFILE").set({
            //     name: this.currentUser,
            //     age: 38,
            //     country: "USA",
            //     gender: 'male',
            //     height: 170,
            //     weight: 65 
            // });
            // db.collection(this.currentUser).doc("OTHERS").set({
            //     name: this.currentUser,
            //     Logout_Mode: 'by Auto Logout Timer',
            //     Login_Method: "Control Panel",
            //     User_Type: 'User',
            // });
                console.log('you made it!')
        }
    }
}
</script>

<style scoped>
.fa-plus{
    color: aliceblue;
    font-size: 4vw;
    background-color: aqua;
    border-radius: 3vw;
    padding: 1vw;
    filter: drop-shadow(5px 5px 4px rgba(22,100, 200,0.5));
    cursor: pointer;
}
.fa-plus:hover{
    position: relative;
    top: 3px;
}
.wrap-form{
    background-color: #fff;
    min-height: 300px;
}
.input-group{
    margin: 10px auto;
    display: flex;
    justify-content: space-around
}
.input-group input,
.input-group textarea{
    width:40%;
} 
.input-group label{
    width: 40%;
}
</style>