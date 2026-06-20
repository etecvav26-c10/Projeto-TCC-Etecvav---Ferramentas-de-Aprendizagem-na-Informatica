import DefaultTheme from 'vitepress/theme'
import HomePage from '../components/HomePage.vue' // ou o caminho correto para o arquivo

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registra o componente globalmente para o index.md encontrá-lo
    app.component('HomePage', HomePage)
  }
}