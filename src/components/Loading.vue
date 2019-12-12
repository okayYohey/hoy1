<template>
  <div class="loading" v-show="!loading">
      <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
import axios from 'axios'

export default {
    name: 'loading',
    components:{
        VueLoading
    },
    data:function(){
        return{
            loading:true
        }
    },
    mounted () {
        axios
            .get("api.php")
            .then(response => {
                this.results = response.data;
                this.loading = false;
                console.log('loaded')
            })
    }
}
</script>

<style>

</style>