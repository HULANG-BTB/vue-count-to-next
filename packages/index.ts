import CountTo from './count-to'

import { Plugin, App } from 'vue'

const components = [CountTo]

const packages: Plugin = {
  install: (app: App) => {
    components.forEach((component: Plugin) => {
      app.use(component)
    })
  },
  ...components
}

export default packages
