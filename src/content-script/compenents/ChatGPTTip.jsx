import { APP_TITLE } from '@/config'
import { Button, Description, Note } from '@geist-ui/core'
import { XCircleFillIcon } from '@primer/octicons-react'
import { useState } from 'preact/hooks'
import Browser from 'webextension-polyfill'

function ChatGPTTip(props) {
  const isLogin = props?.isLogin
  const [showTip, setShowTip] = useState(true)

  const onClose = () => {
    setShowTip(false)
  }

  const onBack = () => {
    Browser.runtime.sendMessage({
      type: 'GO_BACK',
    })
  }

  return (
    <>
      {showTip && (
        <>
          <Note type="success" label={false}>
            <Description
              content={
                <>
                  {isLogin ? (
                    <>
                      {APP_TITLE} is Ready! <br />
                      Keep this tab open to make {APP_TITLE} more stable.
                      <Button auto type="success" onClick={onBack} scale={0.5}>
                        Back
                      </Button>
                    </>
                  ) : (
                    <>Login to the ChatGPT web application.</>
                  )}
                </>
              }
            />
          </Note>

          <Button
            className="glarity--chatgpt--tips--close"
            iconRight={<XCircleFillIcon />}
            auto
            onClick={onClose}
          />
        </>
      )}
    </>
  )
}

export default ChatGPTTip
