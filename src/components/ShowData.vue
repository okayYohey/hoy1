<template>
  <div class="show-data">
      <i class="fa fa-plus"></i>
  </div>
</template>

<script>
import database from 'firebase'
export default {
    name: 'show-data',
    data(){
        return{
            users:[]
        }
    },
    created(){
        database.collection('test_collection').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {// eslint-disable-line
                const data = {// eslint-disable-line

                }
            });
        })
    }
}
</script>

<style>

</style>