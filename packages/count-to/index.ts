import CountTo from './src/count-to.vue'

import { Plugin, App } from 'vue'

const CountToPlugin: Plugin = {
  install: (app: App) => {
    app.component(CountTo.name, CountTo)
  }
}

export default CountToPlugin
