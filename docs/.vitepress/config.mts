import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2025-1-ty/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }, // 确保这里有一个逗号来分隔不同的侧边栏对象
      {
        text: 'About',
        items: [
          { text: 'About Me', link: 'about/about' },
          { text: 'Student Agreement', link: '/student-agreement' }
        ]
      },
      {
        text: 'Assignment',
        items: [
          { text: 'Week 1', link: '/projectmanage' },
          { text: 'Week 2', link: '/arduino' },
          { text: 'Week 3', link: '/PCBmanufacture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
