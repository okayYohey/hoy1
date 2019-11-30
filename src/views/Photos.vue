<template>
  <div class="wrapper">    
    <Photo msg="写真いいね"/>    
    <router-link to="/" class="back">もどる</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'


export default {
  name: 'photo',
  components: {
    Photo
  }
}
</script>
<style scoped>
img{
    width: 20vw;
    border-radius: 30px;
}

</style>
