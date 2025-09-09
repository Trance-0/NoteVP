import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "..\\NoteNextra",
  
  title: "NoteVP",
  description: "A vitepress powered Static Site Generator Backup",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]

  },

  // Rewrite the path to the content directory 
  // Reference: https://vitepress.dev/guide/routing#route-rewrites
  rewrites:{
    'content/:slug*': ':slug*'
  }
})
