<template>
  <div>
    <!-- {{ $route.params.파라미터이름 }} -->
    <!-- 라우터를 통해 세부 페이지를 보여줌 -->
    <router-view></router-view>
    <!-- <list :블로그글="블로그글"></list> -->

    
    <!-- 라우터 정보를 꺼내서 쓰는 경우 -->
    <!-- {{ $route.params.id }} -->
    <section class="container mt-4">
      <h1>디테일페이지</h1>
      <p>{{ 블로그글[$route.params.id].title }}</p>
      <p>{{ 블로그글[$route.params.id].content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name : "detail",
  data(){
    return{

    }
  },
  props: {
    블로그글: Array,
  }
}
</script>

<style>

</style>