<template>
  <div>
    <!-- 부모로 부터 가져온 데이터 바인딩 변수와 클래스(빈 공백)의 문자 표현 -->
    <div @click="fire" :class="filter + ` filter-item`" :style="`background-image: url(${이미지})`">
      <!-- 데이터를 슬롯에 넣음 -->
      <slot></slot>
        <!-- {{ filter }} -->
        <!-- <button >{{ filter }}</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'filterBox',
  props: {
    이미지: String,
    filter: String,
  },
  components:{

  },
  methods: {
    fire(){ // 다른 컴포넌트로 데이터 보내기 emitter = mitt()
      // alert('함수팡팡');
      this.emitter.emit('imageBoxClick', this.filter)
      // console.log(this.fliter);
    },
  }
}
</script>

<style>
.filter-item{
  width: 100px;
  height: 100px;
  /* margin: auto; */
  padding: 7px;
  display: inline-block;
  color: #fff;
  background-position: center;
  background-size: cover;
}
</style>