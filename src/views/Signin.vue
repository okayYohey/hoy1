<template>
    <div class="signin">
    <div class="signin-card">
      <form-wizard
          title="ログイン" 
          subtitle=""
          nextButtonText="次へ" 
          backButtonText="戻る"
          @on-complete="signIn" 
          @on-validate="handleValidation" 
          finish-button-text="完了"
          shape="tab"
          color="#9b59b6">
        <tab-content>
          <div class="input-group">
            <label for="email">メールアドレス</label>
            <label for="password">パスワード</label>
          </div>
          <div class="input-group">
            <input id="email" class="input email" type="email" placeholder="Username" v-model="email">
            <input id="password" class="input password" type="password" placeholder="Password" v-model="password">
          </div>
        </tab-content>
      </form-wizard>
    </div>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from '../components/firebase.js'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    name: 'signin',
    components: {
      'form-wizard': FormWizard,
      'tab-content': TabContent
    },
    data: function(){
        return{
          email:'',
          password:'',
        }
    },
    methods: { 
       signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
          alert('Signed account: ', user.email);
          this.$router.push('/')
        },
        err =>{
          alert(err.message)
        },
        // たぶんwizardのでクリックイベントがとられてて上手くいってない
        // this.finised.preventDefault()
        )
        
        
    }
  }
}
</script>

<style scoped>
.signin-card{
  display: block;
  background-color: #fff;
  max-width: 95vw;
  width: 780px;
  min-width: 300px;
  margin: 10vw auto;
}
label{
  display: inline-block;
  width: 40%;
  text-align: left;
}
.input-group{
  display: flex;
  justify-content: space-around;
}
.input{
  width: 40%;
}
</style>

