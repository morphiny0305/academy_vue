<template>
  <section>
    <!-- 모달창 얍얍얍ㅇ -->
    <div class="black-bg" v-if="모달창열림 == true">
      <div class="white-bg">
        <h4>상 세 페 이 지</h4>
        <p>ㅅㅅㅅㅅㅅㅅㅅㅅㅅ내용</p>
      </div>
    </div>
    <nav class="menu">
      <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{ 메뉴바 }}</a> -->
      <a v-for="(메뉴바, i) in 메뉴들" :key="i">{{ 메뉴바 }}</a>
      <!-- <a href="#">HOME</a>
      <a href="#">경복궁 관람</a>
      <a href="#">기념품</a> -->
    </nav>
    
    <div v-for="(a, i) in 상품" :key="i">
      <img :src="a.image" class="product-img" alt="컵케익">
      <h4 :style="스타일" id="box1">{{a.title}}</h4>
      <p :style="스타일">{{a.price}} 원</p>
      <!-- <button class="btn btn1" @click="clickMe[4]++">ㅇ♡ㅇ</button>
      <span>좋아요 : {{ clickMe[4] }}</span> -->
    </div>
    
  </section>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import product from '.../assets/product.js'
product
export default {
  name: 'App',
  data(){
    return { //데이터 바인딩  data-binding
      상품: product, // import한 임시변수 이름
      clickMe: [10, 20, 15, 45, 100],
      price1 : 100000,
      스타일: 'color: gray',
      product: ['선글라스', '물고기', '고양이', '나이트 댄서'],
      메뉴들: ['얌얌', '꾸꾸', '까까', '뿌뿌'],
      모달창열림 : false, // 사망 플래그 flag
    }
  },
  
  components: {
    // HelloWorld
  },
  methods: {
    increase(){
      this.clickMe +=1; // 데이터를 가져다가 쓰고 싶으면 반드시 this 키워드 qnxdlrl
    }
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
img.product-img{width: 100px;}
button.btn {width: 80px; height: 30px; background: crimson; border-radius: 10px; color: #fff; transition: all 0.5s;}
button.btn:hover{background: #fff; border: 1px solid crimson; color: #000;}
button.btn:active{transform: scale(75%); background: palevioletred;}

/* 모달창 css */
body{margin: 0;}
div{box-sizing: border-box;}
.black-bg{background: rgba(0, 0, 0, 0.5); position: fixed; width: 100%; height: 100%; border-radius: 8px; padding: 20px;}
.white-bg{background: #fff;  width: 100%; border-radius: 8px; padding: 20px}
</style>
