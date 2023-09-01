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
    logo: { src: '/artwork/eom.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Inngangur',
        items: [
          { text: 'Formáli', link: '/inngangur/formali' },
          { text: 'Efnisyfirlit', link: '/inngangur/efnisyfirlit' },          
          { text: 'Hvað er nýsköpun?', link: '/inngangur/hvad_er_nyskopun' }
        ]
      },

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
