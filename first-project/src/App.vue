<template>
  <nav class="menu">
    <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{ 메뉴바 }}</a> -->
    <a v-for="(메뉴바, i) in 메뉴들" :key="i">{{ 메뉴바 }}</a>
    <!-- <a href="#">HOME</a>
    <a href="#">경복궁 관람</a>
    <a href="#">기념품</a> -->
  </nav>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div v-for="(a, i) in product" :key="i">
    <h4 :style="스타일" id="box1">{{product[i]}}</h4>
    <p :style="스타일">5000 원</p>
  </div> -->

  <div>
    <h4 :style="스타일" id="box1">{{product[0]}}</h4>
    <p :style="스타일">2000 원</p>
    <button>ㅇ♡ㅇ</button>
    <span>좋아요 수 : {{ clickMe }}</span>
  </div>
  <div>
    <h4 :style="스타일" id="box1">{{product[1]}}</h4>
    <p :style="스타일">2000 원</p>
  </div>
  <div>
    <h4 :style="스타일" id="box1">{{product[2]}}</h4>
    <p :style="스타일">10000 원</p>
  </div>
  <div>
    <h4>경복궁</h4>
    <p>야간 {{price2}} 원</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return {
      clickMe: 1231230,
      price1 : 100000,
      price2 : 140000,
      스타일: 'color:red',
      product: ['키링', '사진엽서', '한복'],
      메뉴들: ['얌얌', '꾸꾸', '까까', '뿌뿌']
    }
  },
  
  components: {
    // HelloWorld
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
  margin-top: 60px;
}
nav.menu{ background: #2c3e50;
border-radius: 10px; padding: 15px;}
nav.menu a{color: #fff; text-decoration: none;
padding: 10px;}
</style>
