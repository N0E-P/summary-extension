import ChatGPTQuery from './ChatGPTQuery'

export default function ChatGPTCard(props) {
  const { question, onStatusChange, currentTime: propCurrentTime } = props

  return (
    <ChatGPTQuery
      currentTime={propCurrentTime}
      question={question}
      onStatusChange={onStatusChange}
    />
  )
}
