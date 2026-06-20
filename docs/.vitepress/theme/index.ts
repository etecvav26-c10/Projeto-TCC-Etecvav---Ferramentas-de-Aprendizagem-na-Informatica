
import DefaultTheme from 'vitepress/theme'
import HomePage from '../../components/HomePage.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
  }
}