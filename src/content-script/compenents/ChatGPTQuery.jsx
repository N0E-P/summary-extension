import { BASE_URL } from '@/config'
import '@/content-script/styles.scss'
import { isBraveBrowser } from '@/content-script/utils'
import { isIOS, isSafari } from '@/utils/utils'
import { Loading } from '@geist-ui/core'
import classNames from 'classnames'
import { debounce } from 'lodash-es'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import { memo, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import Browser from 'webextension-polyfill'
import ChatGPTFeedback from './ChatGPTFeedback'

function ChatGPTQuery(props) {
  const { onStatusChange, currentTime, question } = props
  const [answer, setAnswer] = useState(null)
  const [error, setError] = useState('')
  const [retry, setRetry] = useState(0)
  const [done, setDone] = useState(false)
  const [status, setStatus] = useState()
  const wrapRef = useRef(null)

  const requestGpt = useMemo(() => {
    console.log('question', question)

    return debounce(() => {
      setStatus(undefined)

      const port = Browser.runtime.connect()
      const listener = (msg) => {
        if (msg.text) {
          let text = msg.text || ''
          text = text.replace(/^(\s|:\n\n)+|(:)+|(:\s)$/g, '')

          setAnswer({ ...msg, ...{ text } })
          setStatus('success')
        } else if (msg.error) {
          setError(msg.error)
          setStatus('error')
        } else if (msg.event === 'DONE') {
          setDone(true)
          setStatus('done')
        }
      }
      port.onMessage.addListener(listener)
      port.postMessage({ question })
      return () => {
        port.onMessage.removeListener(listener)
        port.disconnect()
      }
    }, 1000)
  }, [question])

  const newTab = useCallback(() => {
    Browser.runtime.sendMessage({
      type: 'NEW_TAB',
      data: {
        url: `${BASE_URL}/chat`,
      },
    })
  }, [])

  const openOptionsPage = useCallback(() => {
    Browser.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }, [])

  useEffect(() => {
    onStatusChange?.(status)
  }, [onStatusChange, status])

  useEffect(() => {
    requestGpt()
  }, [question, retry, currentTime, requestGpt])

  // retry error on focus
  useEffect(() => {
    const onFocus = () => {
      if (error && (error == 'UNAUTHORIZED' || error === 'CLOUDFLARE')) {
        setError('')
        setRetry((r) => r + 1)
      }
    }
    window.addEventListener('focus', onFocus)
    return () => {
      window.removeEventListener('focus', onFocus)
    }
  }, [error])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) {
      return
    }

    if (answer) {
      wrap.scrollTo({
        top: 10000,
        behavior: 'smooth',
      })
    }
  }, [answer])

  if (answer) {
    return (
      <div className="markdown-body gpt-markdown" id="gpt-answer" dir="auto">
        <div className="glarity--chatgpt--content" ref={wrapRef}>
          <ReactMarkdown rehypePlugins={[[rehypeHighlight, { detect: true }]]}>
            {answer.text}
          </ReactMarkdown>
        </div>
        {done && (
          <div className="glarity--chatgpt--header">
            <ChatGPTFeedback
              messageId={answer.messageId}
              conversationId={answer.conversationId}
              answerText={answer.text}
            />
          </div>
        )}
      </div>
    )
  }

  // ERROR HANDLING
  if (error === 'UNAUTHORIZED' || error === 'CLOUDFLARE') {
    return (
      <p>
        {isSafari ? (
          <>
            Please set OpenAI API Key in the{' '}
            <button
              className={classNames('glarity--btn', 'glarity--btn__primary', 'glarity--btn__small')}
              onClick={openOptionsPage}
            >
              extension options
            </button>
            .
          </>
        ) : (
          <>
            {' '}
            Please login and pass Cloudflare check at{' '}
            <button
              className={classNames('glarity--btn', 'glarity--btn__primary', 'glarity--btn__small')}
              onClick={newTab}
            >
              chat.openai.com
            </button>
            .
          </>
        )}

        {retry > 0 &&
          !isIOS &&
          (() => {
            if (isBraveBrowser()) {
              return (
                <span className="glarity--block glarity--mt-2">
                  Still not working? Follow{' '}
                  <a href="https://github.com/sparticleinc/chatgpt-google-summary-extension#troubleshooting">
                    Brave Troubleshooting
                  </a>
                </span>
              )
            } else {
              return (
                <span className="glarity--italic glarity--block glarity--mt-2 glarity--text-xs">
                  OpenAI requires passing a security check every once in a while. If this keeps
                  happening, change AI provider to OpenAI API in the{' '}
                  <button
                    className={classNames(
                      'glarity--btn',
                      'glarity--btn__primary',
                      'glarity--btn__small',
                    )}
                    onClick={openOptionsPage}
                  >
                    extension options
                  </button>
                  .
                </span>
              )
            }
          })()}
      </p>
    )
  }
  if (error) {
    return (
      <p>
        Error from ChatGPT:
        <span className="glarity--break-all glarity--block">{error}</span>
        <a
          href="javascript:void(0)"
          onClick={() => {
            setError('')
            setRetry((r) => r + 1)
          }}
        >
          Retry
        </a>
        <br />
        If this keeps happening, change AI provider to OpenAI API in the{' '}
        <button
          className={classNames('glarity--btn', 'glarity--btn__primary', 'glarity--btn__small')}
          onClick={openOptionsPage}
        >
          extension options
        </button>
        .
      </p>
    )
  }

  return <Loading />
}

export default memo(ChatGPTQuery)
