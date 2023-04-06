import { APP_TITLE } from '@/config'
import { Button, Description, Divider, Note } from '@geist-ui/core'
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
              title={`${APP_TITLE}  tips:`}
              content={
                <>
                  {isLogin ? (
                    <>
                      <Divider />
                      I am Ready! <br />
                      Keep this tab to make ChatGPT more stable.
                      <Divider />
                      <Button auto type="success" onClick={onBack} scale={0.5}>
                        Back
                      </Button>
                    </>
                  ) : (
                    <>
                      <Divider />
                      Login to the ChatGPT web application to use the Glarity Summary.
                    </>
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
