import '@/assets/styles/base.scss'
import { getUserConfig } from '@/config'
import ChatGPT from '@/content-script/ChatGPT'
import mount from '@/content-script/components/Mount'
import Popup from '@/content-script/Popup'
import { config } from '@/content-script/search-engine-configs'
import '@/content-script/styles.scss'
import { render } from 'preact'
import Browser from 'webextension-polyfill'
import getQuestion from './components/GetQuestion'
import { siteConfig as siteConfigFn } from './utils'

const siteConfig = siteConfigFn()

async function Run() {
  const userConfig = await getUserConfig()
  const siteRegex = new RegExp(
    Object.values(config)
      .map((v) => {
        return v.regex
      })
      .join('|'),
  )
  const container = document.createElement('section')
  container.className = 'glarity--summary'
  document.body.prepend(container)

  // If this is a normal website
  render(
    <Popup
      pageSummaryEnable={userConfig.pageSummaryEnable}
      pageSummaryWhitelist={userConfig.pageSummaryWhitelist}
      pageSummaryBlacklist={userConfig.pageSummaryBlacklist}
      siteRegex={siteRegex}
    />,
    container,
  )

  // If tab is one from the whitelisted sites, show container
  const questionData = await getQuestion()
  if (questionData) {
    mount(questionData)
  }

  // if we are on openai's website
  Browser.runtime.onMessage.addListener((message, _, sendResponse) => {
    const { type, data } = message
    switch (type) {
      case 'CHATGPT_TAB_CURRENT': {
        const container = document.createElement('section')
        container.className = 'glarity--chatgpt--tips'
        container.id = 'glarity--chatgpt--tips'
        document.body.prepend(container)
        render(<ChatGPT isLogin={data.isLogin} />, container)
        break
      }
      case 'GET_DOM': {
        sendResponse({ html: document.querySelector('html')?.outerHTML })
        break
      }
    }
  })
}

Run()

if (siteConfig?.watchRouteChange) {
  siteConfig.watchRouteChange(Run)
}
