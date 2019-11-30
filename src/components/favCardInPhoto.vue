<template>
    <div class="groupTemp">
        <div class="card">
            <div class="frame">
                <img class="photo" v-bind:src="imgSrc[0]" alt="お気に入りの写真">  
            </div>
            <h3 class="cardTitle"><slot name="title1"></slot></h3>        
            <p><slot name="desc1">ハローワールド</slot></p>
        </div>
        <div class="card">
            <div class="frame">
                <img class="photo" v-bind:src="imgSrc[1]" alt="お気に入りの写真">  
            </div>
            <h3 class="cardTitle"><slot name="title2"></slot></h3>        
            <p><slot name="desc2">ハローワールド</slot></p>
        </div>
        <div class="card">
            <div class="frame">
                <img class="photo" v-bind:src="imgSrc[2]" alt="お気に入りの写真">  
            </div>
            <h3 class="cardTitle"><slot name="title3"></slot></h3>        
            <p><slot name="desc3">ハローワールド</slot></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'favCardInPhoto',
  props: {
    msg: String,
    title: String,   
  },
  data: function(){
      return{
        imgSrc: [
            require ( '../assets/happy1year (100).png' ),
            require ( '../assets/happy1year (33).jpg' ),
            require ( '../assets/happy1year (71).jpg' )
            ],
        i: 0
      }
         
  }
}
</script>

<style scoped>

.groupTemp{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}
.card{    
    margin: 0 auto;
    padding: 15px 0;    
    width: 300px;
    margin-top: 30px;
    background-color:#fff;
    box-shadow: 0 0 20px -5px rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;   
     
}
.card .frame .photo{ 
    width: 90%;
    text-align: center
}
.card .frame{
    text-align: center;
    margin:0 auto;
}
.cardTitle{
    text-align: center;
    margin: 2vw auto;
}
.card{
    color: #445
}
@media screen and (min-width:768px) {     
    .photos .frame{
        width: 300px
    }
}
</style>
