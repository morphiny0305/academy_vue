<template>
  <section>
    
    <!-- 1) 데이터 바인딩 details.vue로 보내려고, 2.props 전송 -->
    <Details :상품="상품" :제목누른거="제목누른거" :모달창열림="모달창열림"></Details>

    <!-- 메뉴 -->
    <nav class="menu">
      <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{ 메뉴바 }}</a> -->
      <a v-for="(메뉴바, i) in 메뉴들" :key="i">{{ 메뉴바 }}</a>
      <!-- <a href="#">HOME</a>
        <a href="#">경복궁 관람</a>
        <a href="#">기념품</a> -->
      </nav>

      <Discount>
      </Discount>
      <!-- <Discount :데이터이름="[1, 2, 3]"/>
      <Discount :데이터이름="{age: 100}"/>
      <Discount :데이터이름="100"/>
      <Discount :데이터이름="String"/>-->

<!-- 오브젝트 : {name: 'kim', age: 20}
<Discount :데이터이름="오브젝트.name" :데이터이름2="오브젝트.age"/> -->

<!-- <Things :상품="상품[0]"></Things>
<Things :상품="상품[1]"></Things>
<Things :상품="상품[2]"></Things>
<Things :상품="상품[3]"></Things>
<Things :상품="상품[4]"></Things> -->
<Things v-for="(a, i) in 상품" :key="i" :상품="상품[i]"></Things>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-for="(a, i) in product" :key="i">
      <h4 :style="스타일" id="box1">{{product[i]}}</h4>
      <p :style="스타일">5000 원</p>
    </div> -->
    <!-- <div v-for="(a, i) in 상품" :key="i">
      <img :src="a.image" class="product-img" alt="컵케익">
      <h4 @click="모달창열림 = true; 제목누른거 = i" :style="스타일" id="box1">{{a.title}}</h4>
      <p :style="스타일">{{a.price}} 원</p>
      <button class="btn btn1" @click="clickMe[4]++">ㅇ♡ㅇ</button>
      <span>좋아요 : {{ clickMe[4] }}</span>
    </div> -->
  </section>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import product from '.../assets/product.js'
import Discount from '.../components/discount.vue'
import Details from '.../components/details.vue'
import Things from '.../components/Things.vue'
export default {
  name: 'App',
  data(){
    return { //데이터 바인딩  data-binding
      제목누른거: 0,
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
    Discount,
    Details,
    Things
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
}
nav.menu{ background: #2c3e50;
border-radius: 10px; padding: 15px 0;}
nav.menu a{color: #fff; text-decoration: none;
padding: 0  15px;}
img.product-img{width: 100px;}
button.btn {width: 80px; height: 30px; background: crimson; border-radius: 10px; color: #fff; transition: all 0.5s;}
button.btn:hover{background: #fff; border: 1px solid crimson; color: #000;}
button.btn:active{transform: scale(75%); background: palevioletred;}

h4{cursor: pointer;}
</style>
