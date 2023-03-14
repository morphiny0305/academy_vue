import { createWebHistory, createRouter } from "vue-router";
import listTxt from './components/list.vue';
import homePage from './components/homePage.vue';
const routes = [
  {
    path: "/list", // 접속 경로
    component: listTxt,
  },
  {
    path: "/homePage",
    component: homePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes, //라우터 변수로 만들어서 생성하고 쓰시오.
});

export default router;  