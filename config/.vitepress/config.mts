import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  srcDir: "../NoteNextra",
  // exclude files
  srcExclude: ['**/README.md',],
  // ignore dead links
  ignoreDeadLinks: true,
  
  title: "NoteVP",
  description: "A vitepress powered Static Site Generator Backup",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mathematics',
        items:[
          { text: 'Math3200', link: '/Math3200' },
          { text: 'Math401', link: '/Math401' },
          { text: 'Math416', link: '/Math416' },
          { text: 'Math429', link: '/Math429' },
          { text: 'Math4111', link: '/Math4111' },
          { text: 'Math4121', link: '/Math4121' },
          { text: 'Math4201', link: '/Math4201' },
          { text: 'Math4501', link: '/Math4501' },
        ]
      },
      { text: 'Computer Science',
        items:[
          { text: 'CSE332S', link: '/CSE332S' },
          { text: 'CSE347', link: '/CSE347' },
          { text: 'CSE442T', link: '/CSE442T' },
          { text: 'CSE5313', link: '/CSE5313' },
          { text: 'CSE510', link: '/CSE510' },
          { text: 'CSE559A', link: '/CSE559A' },
          { text: 'CSE5519', link: '/CSE5519' },
        ]
      },
      { text: 'About', link: '/about'},
      { text: 'Contact', link: '/contact'},
    ],

    // outline config
    
    outline: {
      level: [2,6], // Display all headings up to <h6>
      label: 'Table of Contents', // Optional: Customize the title of the outline
    },

    // auto generate by extension
    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Trance-0/NoteVP' }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'MIT ' + new Date().getFullYear() + ' © ' + 'Trance-0',
    },
    
  },
  markdown: {
    math: true
  },
  lastUpdated: true,

  // Rewrite the path to the content directory 
  // Reference: https://vitepress.dev/guide/routing#route-rewrites
  rewrites:{
    'content/:slug*': ':slug*'
  },

}

const baseFolders=[
  'CSE332S',
  'CSE347',
  'CSE442T',
  'CSE510',
  'CSE559A',
  'CSE5313',
  'CSE5519',
  'Math401',
  'Math416',
  'Math429',
  'Math3200',
  'Math4111',
  'Math4121',
  'Math4201',
  'Math4501',
]

const subfolderOptions = baseFolders.map((folder)=>{
  return {
    documentRootPath: `NoteNextra/content/${folder}`,
    scanStartsPath: `NoteNextra/content/${folder}`,
    resolvePath: `/${folder}/`,
  
    excludeFilesByFrontmatterFieldName: "exclude",
  
    // config to use title from filename
    useTitleFromFrontmatter: false,     // disable prefer `title:` from frontmatter
    useTitleFromFileHeading: true,     // disable else use first H1
  
    // file name to title
    hyphenToSpace: true,
    underscoreToSpace: true,
  
    collapsed: true,
  
    // include course description files
    includeRootIndexFile: true,
    includeFolderIndexFile: true,
  
    // sort menus order numerically from link - file name with number in this case.
    sortMenusOrderNumericallyFromLink: true,
    }
  }
)

const rootfolderOptions =[
  {  
  documentRootPath: 'NoteNextra/content',
  scanStartsPath: 'NoteNextra/content',
  resolvePath: '/',

  excludeFilesByFrontmatterFieldName: "exclude",
  excludeFilesByGlobPattern: ['Swap/*'],

  // root specific, ignore all folder
  excludeByFolderDepth: 1,

  // config to use title from filename
  useTitleFromFrontmatter: false,     // disable prefer `title:` from frontmatter
  useTitleFromFileHeading: true,     // disable else use first H1

  // file name to title
  hyphenToSpace: true,
  underscoreToSpace: true,

  collapsed: true,


  // include course description files
  includeRootIndexFile: true,
  includeFolderIndexFile: true,

  // sort menus order numerically from link - file name with number in this case.
  sortMenusOrderNumericallyFromLink: true,
}]

// use multiple sidebar: https://vitepress-sidebar.cdget.com/advanced-usage/multiple-sidebars-how-to
const vitePressSidebarOptions = [...subfolderOptions,...rootfolderOptions
]

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
