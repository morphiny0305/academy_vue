<template>
  <div style="padding : 10px">
    <h4>팔로워{{ one }}</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
  </div>
  </template> 
  
  

<script>
import { ref, toRefs } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios'; // composition API에서 ajax 요청 -> 데이터 변경하려고

export default {
  name: 'myPage',
  setup(props){ // 데이터 생성, 조작 methods, computed, watch, hook
    let follower = ref([]);
      // 데이터 생성 함수 _ ref(실시간 재 랜더링)
    

    let {one} = toRefs(props); // es6 distructure 문법

    onMounted(()=>{
      axios.get('https://morphiny0305.github.io/testPAGE/vue/follower.json').then((a)=>{
      follower.value = a.data;
      console.log(a.data)
    }).catch(()=>{
      alert('데이터 ㄴㄴ')
    })
    })
    

    return {follower}
  }, // setup() 의 끝

  data(){
    return{

    }
  }, // data() 의 끝


  props:{
    one: Number,
    two: Number,
  }
}

</script>


<style>

</style>