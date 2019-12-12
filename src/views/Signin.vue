<template>
    <div class="signin">
    <h2>Sign in</h2>
    <input type="email" placeholder="Username" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button v-on:click="signIn">Signin</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from '../components/firebase.js'

export default {
    name: 'signin',
    components: {
    },
    data: function(){
        return{
          email:'',
          password:''
        }
    },
    methods: { 
       signIn: function (e) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
          alert('Signed account: ', user.email);
          this.$router.push('/')
        },
        err =>{
          alert(err.message)
        },
        e.preventDefault()
        )
        
        
    }
  }
}
</script>

<style scoped>
.signin{
    position: relative;
  margin-top: 100px;
  display: grid;  
  justify-content: center;
}
</style>>

