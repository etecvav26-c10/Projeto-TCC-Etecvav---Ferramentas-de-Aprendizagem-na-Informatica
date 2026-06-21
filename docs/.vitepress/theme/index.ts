import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import ScratchPage from './components/ScratchPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ScratchPage', ScratchPage)
  }
}