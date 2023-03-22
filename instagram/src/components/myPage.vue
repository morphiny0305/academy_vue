<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
  </div>
  </template> 
  
  

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // composition API에서 ajax 요청 -> 데이터 변경하려고

export default {
  name: 'myPage',
  setup(){ // 데이터 생성, 조작 methods, computed, watch, hook
    let follower = ref([ // 데이터 생성 함수 _ ref(실시간 재 랜더링)

    ]);

    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
      follower.value = a.data;
      console.log(a.data)
    })
    })
    

    return {follower}
  },
  data(){
    return{

    }
  },
  props:{
    one: String,
  }
}

</script>

<style>

</style>