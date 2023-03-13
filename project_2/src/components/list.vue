<template>
  <section>
    <div class="text">
      <!-- <h5>{{블로그글[0].title}}</h5> -->
      <!-- <p>{{ 블로그글[0].date }}</p> -->
    </div>

    <div class="text">
      <h5>블로그 글 제목</h5>
      <p>블로그 글 날짜</p>
    </div>
    
    <div class="text">
      <h5>블로그 글 제목</h5>
      <p>블로그 글 날짜</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "blogList",
  props: {
    블로그글 : Array,
  }

}
</script>

<style>
div.text{width: 300px; height: 100px; background: tan; margin: auto;}
</style>