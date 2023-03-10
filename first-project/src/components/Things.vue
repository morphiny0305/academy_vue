<template>
  <div>
    <img :src="상품.image" class="product-img">
    <!-- $emit = 커스텀 이벤트 실행 후, 누른 제목 모달창열기 -->
    <h4 @click="$emit('openModal')">{{ 상품.title }}</h4>
    <p>{{ 상품.price }} 원</p>
  </div>
</template>

<script>
export default {
// name: 'thingsOne'
props: {
  상품: Object,
}
}
</script>

<style>

</style>