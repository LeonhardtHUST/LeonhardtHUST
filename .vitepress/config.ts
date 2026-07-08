import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Leonhardt',
  description: 'Personal homepage',
  cleanUrls: true,
  appearance: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
