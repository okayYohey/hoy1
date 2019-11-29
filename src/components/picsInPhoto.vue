<template>
    <div class="pics">           
        <picPicInPhoto></picPicInPhoto>                                                     
    </div>
</template>

<script>
import picPicInPhoto from '@/components/picPicInPhoto.vue'

export default {
  name: 'picsInPhoto',
  components: {
      picPicInPhoto
  }
}
</script>

<style scoped>
.pics{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;    
    margin: 5vw 0
}
</style>
