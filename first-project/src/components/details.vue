<template>
  <!-- 모달창 얍얍얍ㅇ -->
  <div class="black-bg" v-if="모달창열림 == true">
      <div class="white-bg">
        <h4>{{상품[제목누른거].title}}</h4>
        <img :src="상품[제목누른거].image" alt="상세이미지">
        <p>{{상품[제목누른거].price}} 원</p>
        <p>{{상품[제목누른거].content}}</p>
        <!-- <button class="btn" @click="모달창열림 = false"> 닫 기 </button> -->
      </div>
    </div>
</template>

<script>
export default{
  name: 'ModalPage',
  props: {
    상품: Array, // 부모 요소가 가진 데이터의 원형  => 데이터 이름: 데이터 타입
    제목누른거: Number,
    모달창열림: Boolean,
  }
}
</script>

<style>
/* 모달창 css */
body{margin: 0; padding: 0;}
div{box-sizing: border-box;}
.black-bg{background: rgba(0, 0, 0, 0.5); position: fixed; width: 100%; height: 100%; border-radius: 8px; padding: 20px;}
.white-bg{background: #fff;  width: 100%; border-radius: 8px; padding: 20px}
</style>