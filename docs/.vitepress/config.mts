import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2025-1-ty/docs/',
  title: "FabLab-NB 2025",
  description: "A VitePress Site",
  // 将 head 配置移到顶级位置
  head: [
  
    ['link', { rel: 'icon', href: 'https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/favicon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/about' },
      { text: 'Assignments', link: '/assignments/week1' },
      { text: 'Project', link: '/project' }
    ],
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Home page', link: '/' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/about/about' },
          { text: 'Student agreement', link: '/about/studentagreement' }
        ]
      },
      {
        text: 'Assignments',
        items: Array.from({ length: 18 }, (_, i) => ({
          text: `Week ${i + 1}`,
          link: `/assignments/week${i + 1}`
        }))
      },
      {
        text: 'Project',
        items: [
          { text: 'Final project', link: '/project/final-project' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
