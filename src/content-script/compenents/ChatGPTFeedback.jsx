import { CheckIcon, CopyIcon, MuteIcon, UnmuteIcon } from '@primer/octicons-react'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { memo } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

function ChatGPTFeedback(props) {
  // react-speech-kit options | Test it here: https://mikeyparton.github.io/react-speech-kit/
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis()
  const voice = voices[1]
  const rate = 1.2 // 0.5 to 2 with a step of 0.1
  const pitch = 1 // 0 to 2 with a step of 0.1

  // copy button
  const [copied, setCopied] = useState(false)

  const clickCopyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(props.answerText)
    setCopied(true)
  }, [props.answerText])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className="gpt--feedback">
      {supported && (
        <>
          {speaking ? (
            <span onClick={cancel}>
              <MuteIcon size={14} />
            </span>
          ) : (
            <span onClick={() => speak({ text: props.answerText, voice, rate, pitch })}>
              <UnmuteIcon size={14} />
            </span>
          )}
        </>
      )}
      <span onClick={clickCopyToClipboard}>
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
      </span>
    </div>
  )
}

export default memo(ChatGPTFeedback)
