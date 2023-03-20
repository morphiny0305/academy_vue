<template>
  <div>
    <!-- 부모로 부터 가져온 데이터 바인딩 변수와 클래스(빈 공백)의 문자 표현 -->
    <div :class="filter + ` filter-item`" :style="`background-image: url(${이미지})`">
      <!-- 데이터를 슬롯에 넣음 -->
      <slot></slot>
        <!-- {{ filter }} -->
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

  }
}
</script>

<style>
.filter-item{
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 7px;
  display: inline-block;
  color: #fff;
  background-position: center;
  background-size: cover;
}
</style>