<template>     
    <main class="main">
        <div class="msg" v-bind:class="{ false: isFalse }">
            <p>毎日更新されるデータだよ</p>
            <p>ふたりでこの数伸ばしていこうね</p>
            <p>右下の”表示する”を押してね</p>
        </div>
        <div class="count" id="count" v-bind:class="{ true : isTrue }">
            <p>今日で冬羽子が生まれて{{ arr.num0 }}日！</p>
            <p>付き合い始めて{{ arr.num1 }}日だよ！！！</p>
            <p>文系で一緒になってからは{{ arr.num2 }}日もたった</p>
            <p>ちなみに俺が生まれてからは{{ arr.num3 }}日だよ、{{ arr.num0-arr.num3 }}日も後輩の僕と仲良くしてね</p>
            <p>これからもよろしくね</p>
            <p>だいすき</p>
        </div>
        <button class="btn" v-bind:class="{ false: isFalse }" v-on:click="calc01(); funcFalse()">表示する</button>            
    </main>  
</template>

<script>

export default {
  name: 'Keyword',
  props: {
    msg: String,
  },
  data: function(){
      return{        
        calc: 0,
        arr:{
          num0: 0,
          num1: 0,
          num2: 0,
          num3: 0,
        },
        isFalse: false,
        isTrue: false
      }      
  },
  methods: {
    window:onload = () => {  
      alert('１年間経った二人へ。おめでとう！！');
    },
    fa: function(){
    },
    calc01: function(){
      // 今日の日付を取得
      var today = new Date();
      var t0day = new Date(today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate())
      // 今日の日時を表示
      // 繰り返し処理
      var theDay = ["2000/08/14", "2018/11/26", "2018/04/02", "2001/03/18" ];
      for( let i=0; i<theDay.length; i++) {
        // Date型にして変数格納
        var day = new Date (theDay[ i ]);
        // 日数計算
        var calc =  (t0day - day) / 86400000;
        // データ代入 改善したい スマートにfor文活かしたい
        if ( i === 0 ) {
          this.arr.num0 = calc;
        } else if ( i === 1 ){
          this.arr.num1 = calc;
        } else if ( i === 2 ){
          this.arr.num2 = calc;
        }else if ( i === 3 ){
          this.arr.num3 = calc;
        }

      }
    },
    reset: function(){
      this.arr.num0 = 0;
      this.arr.num1  = 0;
      this.arr.num2 = 0;
      this.arr.num3 = 0;
    },
    funcFalse: function(){
      if(this.isFalse === false){
        this.isFalse = true
        this.isTrue = true
      }else{
        this.isFalse = false
        this.isTrue = false
      }
    }
  }
}
</script>

<style scoped>
/*keywords*/
.main{
  display: flex;
  justify-content: center;
}
.count{
    text-align: center;
    opacity: 0;
    max-width: 90%;
    margin: 0 auto;
}
.true{
  opacity: 1;
  transition: 0.5s
}
.btn{
  width: 100px;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  bottom: 4vw;
  right: 3vw;
  position: fixed;
  z-index: 5;
  display: block;
  background: -webkit-gradient(linear, left top, right top, from(#f6d365), color-stop(51%, #fda085), to(#f6d365));
  background: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #f6d365 100%);
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  width: 70px;
  height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;
  bottom: 4vw;
  right: 3vw;
  color: #fff;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
  -webkit-box-shadow: 0 0 10px #eee;
  box-shadow: 0 0 10px #eee;
}
.false{
  display: none;
  transition:0.7s
}
@media screen and (min-width: 768px){
  .btn {
    width: 7vw;
    height: 7vw;
  }
}

</style>
