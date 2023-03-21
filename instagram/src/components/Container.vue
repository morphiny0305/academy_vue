<template>
  <section>
    <div v-if="step == 0">
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i">
        <!-- <template v-slot:a>시sdf</template>
        <template v-slot:b>ttgas;l</template> -->
      </Post>
    </div>
    <!-- 게시물 작성 > 필터 선택 -->
    <div v-if="step == 1">
      <!-- 업로드한 이미지 -->
      <div :class="선택필터" class="upload-image" :style="`background-image: url(${이미지})`"></div>
      <div class="filters">
        <!-- 필터박스 가져오기 -->
        <FilterBox class="filter-1" v-for="filter in 필터들" :key="filter" :이미지="이미지" :filter="filter">
          {{filter}}
          <!-- 태그 안에만 바인딩할 때 props 대신 사용하는 slot 문법 -->
          
        </FilterBox>
        
        <!-- {{ filter }} -->
      </div>
    </div>

    <!-- 게시물 작성 > 내용 작성 -->
    <div v-if="step == 2">
      <div :class="선택필터" class="upload-image" :style="`background-image: url(${이미지})`"></div>
      <div class="write">
        <!-- 부모에게 글 value 보내기 -->
        <textarea class="white-box" @input="$emit('write', $event.target.value)"> </textarea>
      </div>
    </div>
  </section>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
export default {
  name: 'container',
  data(){
    return {
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"] ,
        선택필터:'',
    }
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    게시물: Object,
    step: Number,
    이미지: String,
  },
  mounted(){
    this.emitter.on('imageBoxClick', (a)=>{
      console.log(a);
      this.선택필터 = a;
    })
  }
}
</script>

<style>
/* * { box-sizing: border-box;} */
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
/* background-size : cover; */
background-size : 100% 100%;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
/* padding: 8px; */
display: inline-block;
color : white;
background-size: cover;
/* box-sizing: border-box; */
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
} 
</style>