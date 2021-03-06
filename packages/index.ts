import CountTo from './count-to'

import { App } from 'vue'

const components = [CountTo]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export { CountTo }
