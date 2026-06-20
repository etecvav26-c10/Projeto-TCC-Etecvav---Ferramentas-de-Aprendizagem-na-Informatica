import DefaultTheme from 'vitepress/theme'
import './Hub_Principal.css'
import { inBrowser } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp() {
    if (inBrowser) {
      import('./Hub_Script.js')
    }
  }
}