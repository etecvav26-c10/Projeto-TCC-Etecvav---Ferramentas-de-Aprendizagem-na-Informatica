import DefaultTheme from 'vitepress/theme'

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