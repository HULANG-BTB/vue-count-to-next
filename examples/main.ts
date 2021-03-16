import { createApp } from 'vue'
import App from './App.vue'

import CountTo from '../packages'

// console.log(CountTo)

const app = createApp(App)
app.use(CountTo)
app.mount('#app')

export default app
