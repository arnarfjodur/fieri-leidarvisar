import { defineConfig } from 'vitepress'

import markdownItFootnote from  'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tunglskotin heim í hérað",
  description: "Leiðarvísar fyrir vistkerfi nýsköpunar í dreifðum byggðum",
  locales: {
    root: {
      label: 'Íslenska',
      lang: 'is'
    }
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItFootnote)
    }
  },
  lastUpdated: true,
  themeConfig: {
    outlineTitle: 'Á þessari síðu',
    footer: {
      message: 'Þessi vefur er hluti af verkkefninu Að rækta vistkerfi nýsköpunar í dreifðum byggðum, sem stutt er af <a href="https://www.rannis.is/sjodir/rannsoknir/markaaetlun-um-samfelagslegar-askoranir/">Markáætlun um samfélagslegar áskoranir</a>',
      copyright: 'Útgefandi: <a href="https://www.eastofmoon.com/">Austan mána ehf</a>'
    },
    logo: { src: '/artwork/eom.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forsíða', link: '/' },
      { text: 'Efnisyfirlit', link: '/inngangur/efnisyfirlit' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Leita',
            buttonAriaLabel: 'buttonAriaLabel'
          },
          modal: {
            noResultsText: 'Engar niðurstöður',
            resetButtonTitle: 'Hreinsa',
            footer: {
              selectText: 'velja',
              closeText: 'loka',
              navigateText: 'til að ferðast'
            }
          }
        }
      }
    },
    sidebar: [
      {
        text: 'Inngangur',
        items: [
          { text: 'Efnisyfirlit', link: '/inngangur/efnisyfirlit' },
          { text: 'Formáli', link: '/inngangur/formali' },
          { text: 'Hvað er nýsköpun?', link: '/inngangur/hvad_er_nyskopun' },
          { text: 'Dreifðar byggðir', link: '/inngangur/dreifdar_byggdir' }
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
