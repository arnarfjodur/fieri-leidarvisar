import { defineConfig } from 'vitepress'

import markdownItFootnote from  'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tunglskotin heim í hérað",
  description: "Leiðarvísar fyrir vistkerfi nýsköpunar í dreifðum byggðum",
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItFootnote)
    }
  },
  lastUpdated: true,
  themeConfig: {
    outlineTitle: 'Á þessari síðu',
    logo: '/artwork/eom.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Uppskriftir',
        items: [
          { text: 'Sköpunarmiðstöð', link: '/uppskriftir/skopunarmidstod' },
          { text: 'Byggðatækni', link: '/uppskriftir/byggdataekni' },
          { text: 'Klúðurkvöld', link: '/uppskriftir/kludurkvold' },
          { text: 'Nýsköpunarhemill', link: '/uppskriftir/nyskopunarhemill' }                    
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/eastofmoon' }
    ]
  }
})
