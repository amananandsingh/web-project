<template>
  <img alt="Vue logo" src="./assets/book1.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<SignUp/>-->
  <BookUp/>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import SignUp from './components/SignUp.vue'
import BookUp from './components/BookUp.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    //SignUp
    BookUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
