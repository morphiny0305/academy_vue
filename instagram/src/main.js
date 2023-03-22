import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from './store.js'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;//변수 보관함  emitter라는 함수 라이브러리
app.use(store).mount("#app");


// import App from './App.vue'


// createApp(App).mount('#app')
