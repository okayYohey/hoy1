<template>
    <div class="signup">
        <h2>Sign up</h2>
        <input type="email" placeholder="Username" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signUp">Register</button>
        <p>Do you have an account? 
        <router-link to="/signin">sign in now!!</router-link>
        </p>
    </div>
</template>

<script>
import firebase from '../components/firebase.js'
export default {
    name: 'signup',
    components: {
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
.signup{
  position: relative;
  margin-top: 100px;
  display: grid;  
  justify-content: center;

}
</style>>

