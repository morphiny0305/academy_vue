<template>
  <section>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>



    <Container :게시물="게시물"/>
    <button @click="more" class="more-btn">더보기</button>


    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </section>
</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/instaData.js'
import axios from 'axios' ; // axios 라이브러리를 ajax로 요청하기 위해 설치
// axios.get();
export default {
  name: 'App',
  data(){
    return {
      더보기 : 0,
      게시물 : postData,
    }
  },
  components: {
    Container
  },
  methods:{
    more(){
      /* axios.post('url',{name: "kim"}).then().catch(()=>{}) */

      // 1. 더보기 버튼을 누르면 서버에 있는 추가 게시물을 가져옴 2. 그리고 게시하여 보여주기
      axios.get('https://morphiny0305.github.io/testPAGE/vue/more0.json')
      .then(결과=>{
        console.log(결과.data);
        this.게시물.push(결과.data);
      }).catch(()=>{
        // 실패시 실행할 코드
      })
    }
  }
}
</script>

<style>
@import './assets/styles.css';
button.more-btn {margin: auto; display: block;}
</style>
