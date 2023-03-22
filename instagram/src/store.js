import { createStore} from 'vuex'

const store = createStore({
  state(){
    return{ // 스테이트에 데이터 보관
      name: 'seoha',
      age: 2000,
      likes: 555,
      좋아요클릭여부:false,
    }
  },
  mutations:{
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
    }
  }
})

export default store