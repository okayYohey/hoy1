<template>
    <div class="fav">
        <p>{{ title }}<br>BEST3</p>   
        <cardsInPhoto></cardsInPhoto>
    </div>
</template>

<script>
import cardsInPhoto from '@/components/cardsInPhoto.vue'
export default {
  name: 'favInPhoto',
  props: {
      title: String
  },
  components: {
      cardsInPhoto
  }
}
</script>

<style scoped>
.fav{
    text-align: center;
    margin-bottom: 16vw;
    
}

</style>
