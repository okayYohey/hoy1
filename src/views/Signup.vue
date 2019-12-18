<template>
      <div class="signup">
        <div class="signup-card">
          <form-wizard 
          title="会員登録" 
          subtitle=""
          nextButtonText="次へ" 
          backButtonText="戻る"
          @on-complete="signUp" 
          @on-validate="handleValidation" 
          finish-button-text="完了"
          shape="tab"
          color="#9b59b6">
            <tab-content title="Step1"
            class="wizard">
              <p>メールアドレスとパスワード入力します<br>会員登録はそれだけで完了！</p>
            </tab-content>
            <tab-content title="Step2">
              <div class="input-group">
                <label for="email">メールアドレス</label>
                <label for="password">パスワード</label>
              </div>
              <div class="input-group">
                <input id="email" type="email" placeholder="user@user.com" v-model="email" class="input email">
                <input id="password" type="password" plceholder="Password" v-model="password" class="input pass">
              </div>
            </tab-content>
            <tab-content title="Step3">
              <p>ありがとう！</p>
            </tab-content>
          </form-wizard>
        </div>
        <router-link to="/signin">ログインはこちら</router-link>
        </div>

</template>

<script>
import firebase from '../components/firebase.js'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    name: 'signup',
    components: {
      'form-wizard': FormWizard,
      'tab-content': TabContent
    },
    data: function(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
    signUp: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then( user => {// eslint-disable-line
          this.$router.push('/')
        },
        err => {
          alert(err.message);
        })
     e.preventDefault()
    }
  }
}
</script>

<style scoped>
.signup-card{
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
</style>>

