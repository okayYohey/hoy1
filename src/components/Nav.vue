<template>
 <div class="navi">
    <div class="trig" v-on:click="changeActive">
        <span class="line" v-bind:class="{ active: isActive}"></span>
        <span class="line" v-bind:class="{ active: isActive}"></span>
        <span class="line" v-bind:class="{ active: isActive}"></span>
    </div>
    <nav class="slideNav" v-bind:class="{ disable: !isActive}" v-scroll-lock="isActive">
    <ul class="slideNavUl" v-on:click="changeActive">
        <li class="userInfo" v-show="isLoggedin">{{ username }}</li>
        <li class="userInfo" v-show="isLoggedin">{{ isLoggedin }}</li>
        <li class="slideNavUlList" v-show="isLoggedin"><router-link to="/" class="url">ホーム</router-link></li>
        <li class="slideNavUlList" v-show="!isLoggedin"><router-link to="/signup" class="url">会員登録</router-link></li>
        <li class="slideNavUlList" v-show="!isLoggedin"><router-link to="/signin" class="url">ログイン</router-link></li>
        <li class="slideNavUlList" v-show="isLoggedin"><router-link to="/photos" class="url">写真</router-link></li>
        <li class="slideNavUlList" v-show="isLoggedin"><router-link to="/keyword" class="url">数字</router-link></li>
        <li class="slideNavUlList" v-show="isLoggedin"><router-link to="/letter" class="url">手紙</router-link></li>
        <li class="slideNavUlList" v-show="isLoggedin"><router-link to="/edit" class="url">編集</router-link></li>
        <li class="slideNavUlList logout" v-show="isLoggedin"><button @click="logout">ログアウト</button></li>
    </ul>
    </nav>
    <div class="touch" v-bind:class="{ touchDisable: !isActive}" v-on:click="changeActive"></div>
</div>
</template>

<script>
import Vue from 'vue'
import firebase from '../components/firebase.js'
import VScrollLock from 'v-scroll-lock'
Vue.use(VScrollLock)

export default {
    name: 'Nav',
    data:function(){
        return{
            isActive: false,
            isLoggedin: false,
            username: firebase.auth().currentUser.email
        }
    },
    created(){
            if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email,
                this.isLoggedin = true,
                console.log('Youre LOggedIn'),
                console.log("currentuser:" + this.currentUser),
                console.log("login?:" + this.isLoggedIn)
            }else{
                console.log('Not Loggedin'),
                this.isLoggedin = false
            }
        },
    methods:{
        changeActive:function(){
            this.isActive = !this.isActive;
            console.log("isActive:"+this.isActive)
        },
        logout:function(){
            console.log('You re Logged out')
            firebase.auth().signOut().then(() => {
            this.$router.push('/signin')
            })
            console.log('You re Logged out')
        }
    }
    
}
</script>

<style>

.trig{
    position: absolute;
    top: 5vw;
    left: 3vw;
    z-index: 11;
    cursor: pointer;
}
.trig .line{
    display: block;
    width: 27px;
    height: 3px;
    margin-bottom: 5px;
    background-color: #fff;
    transition: .7s
}
.active:nth-child(1){
    transform: rotate(225deg);
    position: relative;
    top: 8px;
}
.active:nth-child(2){
    opacity: 0;
    transform: rotate(180deg);
}
.active:nth-child(3){
    transform: rotate(135deg);
    position: relative;
    top: -8px;
}
.slideNav{
    background-color: #feada6;
    width: 80vw;
    height: 150vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;   
    transition: .7s;
    overflow: auto;
}
.slideNavUl{
    -webkit-overflow-scrolling: touch;
    height: 100vh;
    overflow: auto;
    width: 100%;
    display: inline-block
}
.slideNavUlList{
    width: 100%;
    height: 20vh;
}
.slideNavUlList{
    border-bottom:solid 1px rgba(33,33,33,0.3);
    z-index: 22;
}
.url{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.disable{
    left: -80vw;
}
.logout{
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 30px;
}
.touch{
    display: block;
    position: absolute;
    top: 0;
    left: 80vw;
    width: 20vw;
    height: 100vh;
    z-index: 5;
    background-color: rgba(55,2,2,0.3);
    transition: .8s
}
.touchDisable{
    left: -20vw
}

</style>