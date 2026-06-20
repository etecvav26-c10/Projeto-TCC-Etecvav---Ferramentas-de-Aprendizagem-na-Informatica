import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registra o componente globalmente para o index.md encontrá-lo
    app.component('HomePage', HomePage)
  }
}