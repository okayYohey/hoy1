<template>
  <div class="wrapper">    
    <Keyword msg="keywords"></Keyword>
    <router-link to="/" class="back">もどる</router-link>    
  </div>
</template>

<script>
// @ is an alias to /src
import Keyword from '@/components/Keyword.vue'

export default {
  name: 'keyword',
  components: {
    Keyword
  }
}
</script>

<style scoped>
  

</style>
