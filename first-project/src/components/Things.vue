<template>
  <div>
    <img :src="상품.image" class="product-img">
    <h4>{{ 상품.title }}</h4>
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