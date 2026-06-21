import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomePage from '../../components/HomePage.vue' // <-- Mudado de ../ para ../../

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomePage),
      'home-hero-before': () => h(HomePage)
    })
  },
  enhanceApp({ app }) {
    // Mantido limpo
  }
}