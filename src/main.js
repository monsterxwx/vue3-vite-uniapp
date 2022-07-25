import {
  createSSRApp
} from 'vue'
import App from './App.vue'
import { pinia } from './store'
// import uvUI from 'uv-ui'
// import '../node_modules/uv-ui/dist/style.css'
export function createApp () {
  const app = createSSRApp(App)
  // app.use(uvUI)
  app.use(pinia)
  return {
    app
  }
}
