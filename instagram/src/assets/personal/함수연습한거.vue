<template>
  <section>
    <div class="header">
      <ul class="header-button-left">
        <li @click="step=0">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish()">작성왕료.</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- <h1>vuex {{ $store.state.name }} 스타그램</h1> -->
    <!-- <h1>vuex {{ $store.state.age }} 세..</h1> -->
    <!-- <button @click="$store.commit('이름바꾸기')">vuex 버튼</button> -->
    <button @click="나이더하기(10)">vuex 버튼</button>
    <!-- <button @click="$store.commit('나이더하기', 10)">나이 버튼</button> -->
    <button @click="$store.commit('나이더하기', 10)">나이 버튼</button>
      <h1>methods - 시간 : {{ now() }}</h1>
      <h1>computed - 시간 : {{ now2 }}</h1>
      <h1>computed - 이름 : {{ name }}</h1>
      <p>{{ 카운터 }}</p>
      <button @click="카운터++">더하기더하기</button>
    <button @click="$store.dispatch('getData')">디스패치</button>

    <h3>{{ name }}  {{ 내이름 }}</h3>
    <h3>{{ likes }}</h3>
    <h3>{{ age }}</h3>
<!-- 커스텀 이벤트 수신코드 @이름 -->
    <Container @write="작성한글 = $event" :step="step" :이미지="이미지" :게시물="게시물"/>
    <button v-if="step == 0" @click="more" class="more-btn">더보기</button>


    <div class="footer">
      <ul class="footer-button-plus" v-if="step == 0">
        <!-- <input type="file" id="file" class="inputfile" /> -->
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <!-- 탭메뉴 연습 -->
    <!-- <div v-if="step == 0">내용1</div>
    <div v-if="step == 1">내용2</div>
    <div v-if="step == 2">내용3</div>
    <button @click="step = 0">버튼1</button>
    <button @click="step = 1">버튼2</button>
    <button @click="step = 2">버튼3</button> -->

    <!-- <div style="margin-top: 300px;"></div> -->
  </section>
</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/instaData.js'
import axios from 'axios' ; // axios 라이브러리를 ajax로 요청하기 위해 설치

import {mapState, mapMutations} from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      더보기 : 0,
      게시물 : postData,
      이미지 : '', // 업로드한 이미지 빈 주소 (스트링)
      step:3, // 상태 기록
      작성한글:'',
      선택필터:'',
      카운터:0,
    }
  },
  components: {
    Container
  },
  mounted(){
    this.emitter.on('imageBoxClick', (a)=>{
      // console.log('선택한필터는' + a);
      this.선택필터 = a;
    })
  },
  computed:{
    now2(){ // 계산 결과를 저장하는 공간
      return new Date().toLocaleTimeString();
    },
    name(){
      return this.$store.state.name;
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({내이름 : 'name', 나이 : 'age'})
  },
  methods:{
    now(){
      return new Date().toLocaleTimeString();
    },
    map(){
      return this.$store.state.age;
    },
    ...mapMutations(['나이더하기', 'likeIt', '이름변경']),
    more(){
      /* axios.post('url',{name: "kim"}).then().catch(()=>{}) */

      // 1. 더보기 버튼을 누르면 서버에 있는 추가 게시물을 가져옴 2. 그리고 게시하여 보여주기
      axios.get(`https://morphiny0305.github.io/testPAGE/vue/more${this.더보기}.json`)
      .then(결과=>{
        // console.log(결과.data);
        this.게시물.push(결과.data);
        this.더보기++;
      }).catch(()=>{
        // 실패시 실행할 코드
        alert('데이터를 가져오지 못했지비..');
      })
    },

    upload(e){
      // 이미지 업로드 함수
      let file = e.target.files;
      // console.log(file[0].type);
      let url = URL.createObjectURL(file[0]);// 가상의 URL 생성 저장
      this.이미지 = url; // 이미지 정보 데이터 전송 -> Container
      console.log(this.이미지);
      this.step++;
    },

    publish(){
      let 내게시물 = {
    name : '김멍멍',
    userImage: "https://cdn-icons-png.flaticon.com/512/2437/2437643.png",
    postImage: this.이미지,
    likes: 777777,
    date: new Date().toLocaleDateString(),
    liked: false,
    content: this.작성한글,
    filter: this.선택필터
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    }
    
  }
}
</script>

<style>
@import './assets/styles.css';
button.more-btn {margin: auto; display: block;}

</style>
