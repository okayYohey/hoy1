<template>
  <div class="homePage main">
    <div class="msg">
      <p>冬羽＆洋平へ。</p>
      <p>なんだかんだあったけど1年経ったね</p>
      <p>忘れようとしてもきっと忘れられない思い出ばっかりできたと思う</p>
      <p>ありがとう</p>
    </div>
    <div id="nav" class="links">
      <router-link to="/photos" class="linkBtn">しゃしん</router-link>
      <router-link to="/keyword" class="linkBtn">これまで</router-link>
      <router-link to="/letter" class="linkBtn">てがみ</router-link>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
