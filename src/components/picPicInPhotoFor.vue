<template>
    <div class="pics" :class="{ oneFeatured : fullWidthImage }">
        <div class="frame"  :class="{ none0 : fullWidthImage }">
            <img class="pic" :class="{ full: fullWidthImage }" @click="fullWidthImage = !fullWidthImage" v-lazy="imgSrc[0]" alt="Happy 1 Year Anniversary!!">  
        </div>
  
    </div>
</template>


<script>
export default {
  name: 'picPicInPhoto',
  props: {
    msg: String,
    title: String
  },
  data () {
      return{
          'fullWidthImage': false,
          imgSrc: [
                require("../assets/happy1year (12).jpg"),
                require("../assets/happy1year (3).jpg"),
                require("../assets/happy1year (4).jpg"),
                require("../assets/happy1year (5).jpg"),
                require("../assets/happy1year (6).jpg"),
                require("../assets/happy1year (7).jpg"),
                require("../assets/happy1year (8).jpg"),
                require("../assets/happy1year (9).jpg"),
                require("../assets/happy1year (10).jpg"),
                require("../assets/happy1year (11).jpg"),
                require("../assets/happy1year (2).jpg"),
                require("../assets/happy1year (13).jpg"),
                require("../assets/happy1year (14).jpg"),
                require("../assets/happy1year (15).jpg"),
                require("../assets/happy1year (16).jpg"),
                require("../assets/happy1year (17).jpg"),
                require("../assets/happy1year (18).jpg"),
                require("../assets/happy1year (19).jpg"),
                require("../assets/happy1year (20).jpg"),
                require("../assets/happy1year (21).jpg"),
                require("../assets/happy1year (22).jpg"),
                require("../assets/happy1year (23).jpg"),
                require("../assets/happy1year (24).jpg"),
                require("../assets/happy1year (25).jpg"),
                require("../assets/happy1year (26).jpg"),
                require("../assets/happy1year (27).jpg"),
                require("../assets/happy1year (28).jpg"),
                require("../assets/happy1year (29).jpg"),
                require("../assets/happy1year (30).jpg"),
                require("../assets/happy1year (31).jpg"),
                require("../assets/happy1year (32).jpg"),
                require("../assets/happy1year (33).jpg"),
                require("../assets/happy1year (34).jpg"),
                require("../assets/happy1year (35).jpg"),
                require("../assets/happy1year (36).jpg"),
                require("../assets/happy1year (37).jpg"),
                require("../assets/happy1year (38).jpg"),
                require("../assets/happy1year (39).jpg"),
                require("../assets/happy1year (40).jpg"),
                require("../assets/happy1year (41).jpg"),
                require("../assets/happy1year (42).jpg"),
                require("../assets/happy1year (43).jpg"),
                require("../assets/happy1year (44).jpg"),
                require("../assets/happy1year (45).jpg"),
                require("../assets/happy1year (46).jpg"),
                require("../assets/happy1year (47).jpg"),
                require("../assets/happy1year (48).jpg"),
                require("../assets/happy1year (49).jpg"),
                require("../assets/happy1year (50).jpg"),
                require("../assets/happy1year (51).jpg"),
                require("../assets/happy1year (52).jpg"),
                require("../assets/happy1year (53).jpg"),
                require("../assets/happy1year (54).jpg"),
                require("../assets/happy1year (55).jpg"),
                require("../assets/happy1year (56).jpg"),
                require("../assets/happy1year (57).jpg"),
                require("../assets/happy1year (58).jpg"),
                require("../assets/happy1year (59).jpg"),
                require("../assets/happy1year (60).jpg"),
                require("../assets/happy1year (61).jpg"),
                require("../assets/happy1year (62).jpg"),
                require("../assets/happy1year (63).jpg"),
                require("../assets/happy1year (64).jpg"),
                require("../assets/happy1year (65).jpg"),
                require("../assets/happy1year (66).jpg"),
                require("../assets/happy1year (67).jpg"),
                require("../assets/happy1year (68).jpg"),
                require("../assets/happy1year (69).jpg"),
                require("../assets/happy1year (70).jpg"),
                require("../assets/happy1year (71).jpg"),
                require("../assets/happy1year (72).jpg"),
                require("../assets/happy1year (73).jpg"),
                require("../assets/happy1year (74).jpg"),
                require("../assets/happy1year (75).jpg"),
 
              ]
      }
  }
}
</script>

<style scoped>
.full {
    position: absolute;
    /* top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
    width: 90vw;
    height: auto;
}
.pics .frame{
    position: relative;
    display: inline-block;
    width: 150px;   
    height: 150px;
    border: 7px solid #fff;    
    overflow: hidden;
    box-shadow: 0 0 20px -5px rgba(0,0,0,0.8);    
    margin: 1.5vw 0;
}
.pics .pic{
    width: 100%;   
    height: 100%; 
    object-fit:cover;    
    cursor: pointer;
      transition:.5s;
}

/* lazy loading */
.pics .frame .pic[lazy=loading] {
   width: 50px;
   height: 50px;
   position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform : translate(-50%,-50%);
    transform : translate(-50%,-50%);
  }
  .pics .frame .pic[lazy=error] {
   width: 50px;
   height: 50px;
   position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform : translate(-50%,-50%);
    transform : translate(-50%,-50%);
  }

@media screen and (min-width:768px) {     
    .photos .frame{
        width: 300px;
        height: 300px;
        margin: 10px;
    }
}
.pics .none0{
    position: absolute;
    width: 90vw;
    min-height: auto;

}
.pics .full{
    display: block;
    width: 100%;
    height: 100%;
    z-index: 3;
    object-fit: unset
}
.onefeatured{
    cursor: pointer;
    background-color: rgba(0,0,0,0.3)
}
</style>
