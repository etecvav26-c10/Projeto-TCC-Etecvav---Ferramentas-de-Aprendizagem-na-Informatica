import DefaultTheme from 'vitepress/theme'
import './style.css'

import ScratchPage from './components/ScratchPage.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('ScratchPage', ScratchPage)
  }
}