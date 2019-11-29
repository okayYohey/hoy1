<template>
  <div class="photos">        
    <main class="main">
        <msgInPhoto msg="きれいなとわちゃんばっかりだね"></msgInPhoto>
        <picsInPhoto title="You can do it!!"></picsInPhoto>
        <favInPhoto title="お気に入りの写真" ></favInPhoto>        
    </main>
  </div>
</template>

<script>

import favInPhoto from '@/components/favInPhoto.vue'
import picsInPhoto from '@/components/picsInPhoto.vue'
import msgInPhoto from '@/components/msgInPhoto.vue'

export default {
  name: 'Photo',
  props: {
    msg: String
  },
  components: {
    favInPhoto,
    picsInPhoto,
    msgInPhoto
  }
}
</script>

<style scoped>

</style>
