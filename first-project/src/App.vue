<template>
  <section>
    
    <!-- 1) 데이터 바인딩 details.vue로 보내려고, 2.props 전송 -->
    <Details @closeModal="모달창열림 = false" :상품="상품" :제목누른거="제목누른거" :모달창열림="모달창열림"></Details>

    <!-- 메뉴 -->
    <nav class="menu">
      <!-- <a v-for="메뉴바 in 메뉴들" :key="메뉴바">{{ 메뉴바 }}</a> -->
      <a v-for="(메뉴바, i) in 메뉴들" :key="i">{{ 메뉴바 }}</a>
      <!-- <a href="#">HOME</a>
        <a href="#">경복궁 관람</a>
        <a href="#">기념품</a> -->
      </nav>
      <Discount v-if="showDiscount==true" :amount="amount"></Discount>
      <!-- <p>지금 결제하면 {{ amount }}% 할인 해드림</p> -->
      
      <button class="btn" @click="priceSort()">가격순정렬</button>
        <button class="btn" @click="sortBack()">정렬추ㅏㅣ;ㅣ소</button>

        
        <Things @openModal="모달창열림 = true; 제목누른거 = $event" :상품="상품[i]" v-for="(a, i) in 상품" :key="i" ></Things>
        
  </section>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import product from './assets/product.js'
import Discount from './components/discount.vue'
import Details from './components/details.vue'
import Things from './components/Things.vue'
export default {
  name: 'App',
  data(){
    return { //데이터 바인딩  data-binding
      amount: 20,
      showDiscount: true, // flag
      제목누른거: 0,
      상품: product, // import한 임시변수 이름
      clickMe: [10, 20, 15, 45, 100],
      price1 : 100000,
      스타일: 'color: gray',
      product: ['선글라스', '물고기', '고양이', '나이트 댄서'],
      메뉴들: ['얌얌', '꾸꾸', '까까', '뿌뿌'],
      모달창열림 : false, // flag
      상품오리지널: [...product], // 개별 사본 저장
    }
  },
  
  mounted(){
    // 라이프 사이클 훅
    setInterval(()=>{ // 정해진 시간마다 세일 값 감소
      if(this.amount > 0){this.amount--;}
    }, 1000),
    setTimeout(()=>{
      this.showDiscount = false;
    },21000)
  },
  
  

  updated(){
    clearInterval(()=>{
      this.amount == 0;
    }, 1000)
  },  

  components: {
    // HelloWorld
    Discount,
    Details,
    Things
  },
  methods: {
    increase(){
      this.clickMe +=1; // 데이터를 가져다가 쓰고 싶으면 반드시 this.데이터이름
    },
    priceSort(){
      this.상품.sort(function(a,b){
        return a.price-b.price;  //{}-{} ===>음수나 양수 X
      })
    },
    sortBack(){
      this.상품 = [...this.상품오리지널];
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
button.btn {padding: 5px; height: 30px; background: crimson; border-radius: 10px; color: #fff; transition: all 0.5s;}
button.btn:hover{background: #fff; border: 1px solid crimson; color: #000;}
button.btn:active{transform: scale(75%); background: palevioletred;}

h4{cursor: pointer; width: 100px; margin: auto; border: 1px dashed crimson;}
</style>
