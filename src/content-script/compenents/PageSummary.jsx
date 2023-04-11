import logoWhite from '@/assets/img/logo-white.png'
import logo from '@/assets/img/logo.png'
import { APP_TITLE, getProviderConfigs, getUserConfig, Language } from '@/config'
import ChatGPTQuery from '@/content-script/compenents/ChatGPTQuery'
import { getSummaryPrompt } from '@/content-script/prompt'
import { getPageSummaryComments, getPageSummaryContntent } from '@/content-script/utils'
import { commentSummaryPrompt, pageSummaryPrompt, pageSummaryPromptHighlight } from '@/utils/prompt'
import { isIOS } from '@/utils/utils'
import { GearIcon, XCircleFillIcon } from '@primer/octicons-react'
import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'preact/hooks'
import Browser from 'webextension-polyfill'

export default function PageSummary(props) {
  const { pageSummaryEnable, pageSummaryWhitelist, pageSummaryBlacklist, siteRegex } = props
  const [showCard, setShowCard] = useState(false)
  const [supportSummary, setSupportSummary] = useState(true)
  const [question, setQuestion] = useState('')
  const [show, setShow] = useState(false)

  const onSwitch = useCallback(() => {
    setShowCard((state) => {
      const cardState = !state

      if (cardState) {
        setQuestion('')
      }

      return cardState
    })
  }, [])

  const openOptionsPage = useCallback(() => {
    Browser.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }, [])

  const onSummary = useCallback(async () => {
    setSupportSummary(true)

    setQuestion('')

    const pageComments = await getPageSummaryComments()
    const pageContent = await getPageSummaryContntent()
    const article = pageComments?.content ? pageComments : pageContent

    const title = article?.title || document.title || ''
    const description =
      article?.description ||
      document.querySelector('meta[name="description"]')?.getAttribute('content') ||
      ''
    const content = article?.content ? description + article?.content : title + description

    console.log('article content', content)

    if (article?.content || description) {
      const language = window.navigator.language
      const userConfig = await getUserConfig()
      const providerConfigs = await getProviderConfigs()

      const promptContent = getSummaryPrompt(
        content.replace(/(<[^>]+>|\{[^}]+\})/g, ''),
        providerConfigs.provider,
      )
      const replyLanguage = userConfig.language === Language.Auto ? language : userConfig.language

      const prompt = pageComments?.content
        ? commentSummaryPrompt({
            content: promptContent,
            language: replyLanguage,
            prompt: userConfig.promptComment
              ? userConfig.promptComment
              : pageSummaryPromptHighlight,
            rate: article?.['rate'],
          })
        : pageSummaryPrompt({
            content: promptContent,
            language: replyLanguage,
            prompt: userConfig.promptPage ? userConfig.promptPage : pageSummaryPromptHighlight,
          })

      setQuestion(prompt)
      return
    }

    setSupportSummary(false)
  }, [])

  useEffect(() => {
    Browser.runtime.onMessage.addListener((message) => {
      const { type } = message
      if (type === 'OPEN_WEB_SUMMARY') {
        if (showCard) {
          return
        }

        setQuestion('')
        setShowCard(true)
      }
    })
  }, [showCard])

  // Only show the popup on websites that are not on the black/white list
  useEffect(() => {
    const hostname = location.hostname
    const blacklist = pageSummaryBlacklist.replace(/[\s\r\n]+/g, '')
    const whitelist = pageSummaryWhitelist.replace(/[\s\r\n]+/g, '')

    const inWhitelist = !whitelist
      ? !blacklist.includes(hostname)
      : !blacklist.includes(hostname) && pageSummaryWhitelist.includes(hostname)

    const show =
      pageSummaryEnable && ((isIOS && inWhitelist) || (inWhitelist && !siteRegex?.test(hostname)))

    setShow(show)
  }, [pageSummaryBlacklist, pageSummaryEnable, pageSummaryWhitelist, siteRegex])

  return (
    <>
      {showCard ? (
        <div className="glarity--card">
          <div className="glarity--card__head ">
            {/* Logo, name and options button */}
            <div className="glarity--card__head--title">
              <a href="https://glarity.app" rel="noreferrer" target="_blank">
                <img src={logo} alt={APP_TITLE} /> {APP_TITLE}
              </a>{' '}
              <button
                className={classNames('glarity--btn', 'glarity--btn__icon')}
                onClick={openOptionsPage}
              >
                <GearIcon size={14} />
              </button>
            </div>

            {/* Close extension */}
            <div className="glarity--card__head--action">
              <button
                className={classNames('glarity--btn', 'glarity--btn__icon')}
                onClick={onSwitch}
              >
                <XCircleFillIcon />
              </button>
            </div>
          </div>

          {/*ChatGPT query to get the summary */}
          <div className="glarity--card__content">
            {question ? (
              <div className="glarity--container">
                <div className="glarity--chatgpt">
                  <ChatGPTQuery question={question} />
                </div>

                {/*First running code when opening extension  */}
              </div>
            ) : (
              <div className="glarity--card__empty ">
                {!supportSummary ? 'No Summary Available For This Page.' : onSummary()}
              </div>
            )}
          </div>

          {/* Popup on all the pages */}
        </div>
      ) : (
        show && (
          <button
            onClick={onSwitch}
            className={classNames('glarity--btn', 'glarity--btn__launch', 'glarity--btn__primary')}
          >
            <img src={logoWhite} className="glarity--w-5 glarity--h-5 glarity--rounded-sm" />
            Summarize !
          </button>
        )
      )}
    </>
  )
}
