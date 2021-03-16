import { App } from 'vue'
import CountTo from './src/count-to.vue'

CountTo.install = (app: App) => {
  app.component(CountTo.name, CountTo)
}

export default CountTo
