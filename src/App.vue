<template>
  <div id="app" class="wrapper">    
    <Header></Header>
    <Loading></Loading>
    <Nav class="navi" :key="$route.fullPath"></Nav>
    <transition>
        <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Nav,
    Loading
    },
}
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
#app {
  text-align: center; 
  background: linear-gradient(#feada6, #f18181); 
}

/* wrapper */
.wrapper{            
    display: flex;
    flex-direction: column;    
    position: relative;    
    box-sizing: border-box;
    /* width: 100vw;     */
    min-height: 100vh;
    min-width: 300px;
    padding: 0 0 200px 0;
}
/* main */
.main{    
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    justify-content: center;
    top: 8vw;
    position: relative;
}
/* btnの囲み */
.links{
    text-align: center;        
    display: flex;
    justify-content: center;
    margin-top: 250px;
}

/* btn */
.linkBtn{
    background: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    text-decoration: none;    
    border-radius: 50%;
    width: 110px;
    height: 110px;
    margin: auto 0;
    display: flex;
    -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
    align-items: center; /* 縦方向中央揃え */
    -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
    justify-content: center;
    position: relative;
    color: #6040e0;
    font-weight: bold;    
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
    box-shadow: 0 0 10px #eee;    
    font-size: 20px
}
.linkBtn:hover{
    position: relative;
    text-decoration: none;
    background-position: right center;
    color: #480fe4;    
}
.linkBtn:nth-child(1){
    position: relative;
    top: -150px
}
.linkBtn:nth-child(3){
    position: relative;
    top: -150px
}
.linkBtn:nth-child(1):hover{
    top: -145px
}
.linkBtn:nth-child(2):hover{
    top: 5px
}
.linkBtn:nth-child(3):hover{
    top: -145px
}
.back{
    display: block;
    background: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    text-decoration: none;    
    font-size: 0.8rem;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
    align-items: center; /* 縦方向中央揃え */
    -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
    justify-content: center;
    position: fixed;
    bottom: 4vw;
    right: 3vw;
    color: #fff;
    z-index: 2;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
    box-shadow: 0 0 10px #eee;    
}
.back:hover{
    text-decoration: none;    
    bottom: 3.5vw;
    
}
.back:active{
    color: #fd5085;
    background-position: right center;
    text-decoration: none;
}
p{
  margin-bottom: 1rem;
}

/* ページ遷移 */
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

@media screen and (min-width:768px) { 
    .wrapper{
        padding:0;
    }
    .back{
        width: 7vw;
        height: 7vw;
    }
    .photos .frame{
        width: 300px
    }
    .linkBtn{
        margin: 50px;
        width: 15vw;
        height: 15vw; 
    }
    
}
@media screen and (min-width:1025px) { 
    .links{
        margin-top: 150px;
    }
}
</style>
