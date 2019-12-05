<template>
    <div class="signup">
        <h2>Sign up</h2>
        <input type="email" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signUp">Register</button>
        <p>Do you have an account? 
        <router-link to="/signin">sign in now!!</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: 'signup',
    components: {
    },
    data: function(){
        return{
            username: '',
            password: ''
        }
    },
    methods: {
    signUp: function () {
      var firebase = require("firebase/app");
      require("firebase/auth");
      require("firebase/firestore");
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
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

