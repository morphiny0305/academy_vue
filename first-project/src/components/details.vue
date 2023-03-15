<template>
  <!-- 모달창 얍얍얍ㅇ -->
  <div class="black-bg" v-if="모달창열림 == true">
      <div class="white-bg">
        <h4>{{상품[제목누른거].title}}</h4>
        <img :src="상품[제목누른거].image" alt="상세이미지">
        <p>{{상품[제목누른거].price}} 원</p>
        <p>{{상품[제목누른거].content}}</p>
<!-- @input @click이랑 같은 거 -->
           <!-- <input @input="month=$event.target.value"> -->
           <input v-model.number="priceNumber">
           <p>{{priceNumber}} 개 선택 :{{상품[제목누른거].price * priceNumber}}원</p>
           <!-- read only기능 -->
          <button class="btn" @click ="$emit('closeModal')">닫기버튼</button>      </div>
    </div>
</template>

<script>
export default{
  name: 'ModalPage',
  data(){
    return{
      priceNumber:0
    }
   },
   watch:{
    priceNumber(a){  //프라이넘버데이터가 바뀔 때 마다
    //if()만약에 10개 이상 구매하면 11개 이상 예약 못합니다라는 문구를 출력
        if(a > 11){
          alert("11개 이상은 선택할 수 없어ww.....")
        }
        //문자방지코드 문자입력시==> 문자입력하지마세요 
        //이후에 값을 1로 되돌림
        if(isNaN(a)==true){
          alert("문자입력하지마세요");
          this.priceNumber=1;
        }

    }

   }, 
  props: {
    상품: Array, // 부모 요소가 가진 데이터의 원형  => 데이터 이름: 데이터 타입
    제목누른거: Number,
    모달창열림: Boolean,
  },
  beforeUpdate(){
    if(this.priceNumber == 2){alert('..')}
  },
}
</script>

<style>

</style>