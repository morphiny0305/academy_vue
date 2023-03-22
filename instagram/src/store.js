import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return{ // 스테이트에 데이터 보관
      name: 'seoha',
      age: 2000,
      likes: [1, 2, 3],
      좋아요클릭여부:false,
      more: {},
    }
  },
  mutations:{ // state의 상태를 처리하는 함수
    나이더하기(state, num){ // 함수를 미리 정의
      state.age+= parseInt(num);
    },
    이름바꾸기(state){
      state.name = '념념'
    },
    likeIt(state){
      if(state.좋아요클릭여부 == false){
        state.likes ++;
        state.좋아요클릭여부 = true;
      }else{
        state.likes --;
        state.좋아요클릭여부 = false;
      }
    },
    setMore(state, data){
      state.more = data
    }
  },
  actions: {
    // ajax를 사용하는 함수
    /* 데이터가져오기(){
      axios.get(``).then(()=>{
        // 성공할 경우 실행하는 코드
    }).catch(()=>{
      // 실패할 경우 실행하는 코드
    })
    } */
    getData(context){
      // context = $store
      axios.get('https://morphiny0305.github.io/testPAGE/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }
  }
})

export default store