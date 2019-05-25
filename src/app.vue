<template>
    <div id="app">
  	   <topnav></topnav>
       <router-view></router-view>  
    </div>
</template>

<script>
import topnav from './components/topnav.vue'
export default {
  name: 'App',
  data(){
  	return {
  		list:[]
  	}
  },  
  components: {topnav}

}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%; 
    overflow:hidden; 
  }
</style>
