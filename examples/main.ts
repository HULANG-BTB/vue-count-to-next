import { createApp } from 'vue'
import App from './App.vue'

import CountTo from '../packages/count-to'

const app = createApp(App)
app.use(CountTo)
app.mount('#app')

export default app
