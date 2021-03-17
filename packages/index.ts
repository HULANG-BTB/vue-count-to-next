import CountTo from './count-to'

import { App } from 'vue'

const components = [CountTo]

const install: any = function(app: App) {
  if (!install.installed) {
    components.forEach((component) => {
      app.component(component.name, component)
    })
    install.installed = true
  }
}

export default {
  install
}

export { CountTo }
