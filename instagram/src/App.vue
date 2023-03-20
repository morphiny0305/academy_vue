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


<!-- 커스텀 이벤트 수신코드 @이름 -->
    <Container @write="작성한글 = $event" :step="step" :이미지="이미지" :게시물="게시물"/>
    <button v-if="step == 0" @click="more" class="more-btn">더보기</button>


    <div class="footer">
      <ul class="footer-button-plus" v-if="step == 0">
        <!-- <input type="file" id="file" class="inputfile" /> -->
        <input  @change="upload" type="file" id="file" class="inputfile" />
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
// axios.get();
export default {
  name: 'App',
  data(){
    return {
      더보기 : 0,
      게시물 : postData,
      이미지 : '', // 업로드한 이미지 빈 주소 (스트링)
      step:0, // 상태 기록
      작성한글:'',
    }
  },
  components: {
    Container
  },
  methods:{
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
    likes: 111,
    date: new Date().toLocaleDateString(),
    liked: false,
    content: this.작성한글,
    filter: "perpetua"
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
