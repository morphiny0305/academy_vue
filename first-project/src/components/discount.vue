<template>
  <!-- 할인 배너 만들기 -->
  <div class="saleBanner">
    <h3>지금사면 {{ amount }} % 할인</h3>
  </div>
</template>

<script>
export default{
  name: 'discountSale',
  props: {
    amount: Number
  },
}
</script>

<style>
.saleBanner{
  background: rgba(0, 218, 109, 0.3);
  padding: 15px;
  color: #444;
}
</style>