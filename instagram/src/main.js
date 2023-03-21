import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;//변수 보관함  emitter라는 함수 라이브러리
app.mount("#app")
// import App from './App.vue'


// createApp(App).mount('#app')
