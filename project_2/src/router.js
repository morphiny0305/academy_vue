import { createWebHistory, createRouter } from "vue-router";
import listTxt from './components/list.vue';
import homePage from './components/homePage.vue';
import Detail from './components/detail.vue';

import COMMENT from './components/comment.vue';
import ICON from './components/icons.vue';


const routes = [
  {
    path: "/list", // 접속 경로
    component: listTxt,
  },
  {
    path: "/homePage",
    component: homePage,
  },
  {
    // path: "/detail/:id(\\d+)",  url 주소에 숫자만 입력받아야 하는 경우
    path: "/detail/:id",
    component: Detail,
    children: [
      {path: 'icons', component: ICON},
      {path: 'comment', component: COMMENT},
    ]
  },
  { // 유효하지 않은 문자를 입력한 경우, 홈으로 전송하거나 404 페이지 출력
    path: "/:anything(.*)",
    component: homePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes, //라우터 변수로 만들어서 생성하고 쓰시오.
});

export default router;  