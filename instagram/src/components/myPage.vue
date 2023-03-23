<template>
  <div style="padding : 10px">
    <h4>팔로워 {{ 결과 }}</h4>
    <input placeholder="찾기" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image: url(${a.image}) `"></div>
      <span class="profile-name"> {{ a.name }} </span>
    </div>
  </div>
  </template> 
  
  

<script>
import { computed, ref, toRefs } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios'; // composition API에서 ajax 요청 -> 데이터 변경하려고
import { useStore } from 'vuex' // composition API에서 vuex사용

export default {
  name: 'myPage',
  setup(props){ // 데이터 생성, 조작 methods, computed, watch, hook
    let follower = ref([]);
      // 데이터 생성 함수 _ ref(실시간 재 랜더링)
    

    let {one} = toRefs(props); // es6 distructure 문법
    let {two} = toRefs(props); // es6 distructure 문법

    let 결과 = computed(()=>{return follower.value.length});
    console.log(결과.value);
    console.log(one.value);
    console.log(two.value);
    
    let store = useStore(); // $store 랑 같은 의미
    console.log('스토어에 있는 아이템 = ' + store.state.name);
    // console.log('스토어에 있는 아이템 = ' + store.commit('이름바꾸기'));

    onMounted(()=>{
      axios.get('https://morphiny0305.github.io/testPAGE/vue/follower.json').then((a)=>{
      follower.value = a.data;
      console.log(a.data)
    }).catch(()=>{
      alert('데이터 ㄴㄴ')
    })
    })
    

    return {follower, 결과}
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