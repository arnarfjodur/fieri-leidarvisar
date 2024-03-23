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
  sitemap: {
    hostname: 'https://leidarvisar.vistkerfi.is'
  },
  themeConfig: {
    docFooter: {
      prev: 'Fyrri síða',
      next: 'Næsta síða'
    },
    lastUpdated: {
      text: 'Síðast breytt',
    },
    sidebarMenuLabel: 'Efnisyfirlit',
    returnToTopLabel: 'Aftur upp',
    darkModeSwitchLabel: 'Útlit',
    outlineTitle: 'Á þessari síðu',
    footer: {
      message: 'Þessi vefur er hluti af verkefninu Að rækta vistkerfi nýsköpunar í dreifðum byggðum, sem stutt er af <a href="https://www.rannis.is/sjodir/rannsoknir/markaaetlun-um-samfelagslegar-askoranir/">Markáætlun um samfélagslegar áskoranir</a>',
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
      { text: 'Efnisyfirlit', link: '/inngangur/efnisyfirlit' },
      {
        text: 'Inngangur',
        items: [
          { text: 'Formáli', link: '/inngangur/formali' },
          { text: 'Hvað er nýsköpun?', link: '/inngangur/hvad_er_nyskopun' },
          { text: 'Dreifðar byggðir', link: '/inngangur/dreifdar_byggdir' },
          { text: 'Ólík úrræði', link: '/inngangur/olik_urraedi' },
          { text: 'Líðan frumkvöðla', link: '/inngangur/lidan_frumkvodla' }

        ]
      },
      {
        text: 'Nálganir',
        items: [
          { text: 'Vistkerfi nýsköpunar', link: '/nalganir/vistkerfi_nyskopunar' },
          { text: 'Sprotasamfélög', link: '/nalganir/sprotasamfelog' },
          { text: 'Að skapa störf eða laða að fólk', link: '/nalganir/ad_skapa_storf_eda_lada_ad_folk' },
          { text: 'Nýsköpunarstjórnir', link: '/nalganir/nyskopunarstjornir' },
          { text: 'Störf og staðsetningar', link: '/nalganir/storf_og_stadsetningar'},
          { text: 'Snjöll sérhæfing', link: '/nalganir/snjoll_serhaefing' }           
        ]
      },
      {
        text: 'Uppskriftir',
        items: [
          { text: 'Sköpunarmiðstöð', link: '/uppskriftir/skopunarmidstod' },
          { text: 'Byggðatækni', link: '/uppskriftir/byggdataekni' },
          { text: 'Klúðurkvöld', link: '/uppskriftir/kludurkvold' },
          { text: 'Nýsköpunarhemill', link: '/uppskriftir/nyskopunarhemill' },
          { text: 'Öfugt SVÓT', link: '/uppskriftir/ofugt_svot' }                    

        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/eastofmoon' }
    ]
  }
})
