<template>
  <section>
    <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i"/>
  </section>
</template>

<script>
import Post from './Post.vue'
export default {
  name: 'container',
  data(){
    return {
      
    }
  },
  components: {
    Post
  },
  props: {
    게시물: Object,
  }
  
}
</script>

<style>

</style>