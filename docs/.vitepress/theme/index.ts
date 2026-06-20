import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomePage from '../components/HomePage.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Injeta seu componente customizado no slot da página inicial nativa
      'home-features-after': () => h(HomePage),
      'home-hero-before': () => h(HomePage)
    })
  },
  enhanceApp({ app }) {
    // Mantido vazio e limpo para não gerar erros de importação duplicada
  }
}