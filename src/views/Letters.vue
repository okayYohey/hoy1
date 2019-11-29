<template>
  <div class="wrapper">    
    <Letter msg="てがみ好きすぎ～"/>
    <router-link to="/" class="back">もどる</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Letter from '@/components/Letter.vue'

export default {
  name: 'letter',
  components: {
    Letter
  }
}
</script>
<style scoped>
/* .wrapper{
    background-image: linear-gradient(to top, #faf0c4 10%, #f6d1ef 90%);
} */
img{
    width: 10vw;
    border-radius: 30px;
}
</style>
