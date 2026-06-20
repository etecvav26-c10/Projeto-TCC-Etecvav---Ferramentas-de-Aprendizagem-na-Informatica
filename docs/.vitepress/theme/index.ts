import DefaultTheme from 'vitepress/theme'
import HomePage from '../../components/HomePage.vue'
import './Hub_Principal.css'

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
  }
}