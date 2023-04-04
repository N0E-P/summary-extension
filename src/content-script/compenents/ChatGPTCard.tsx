import ChatGPTQuery, { QueryStatus } from './ChatGPTQuery'

interface Props {
  question: string
  onStatusChange?: (status: QueryStatus) => void
  currentTime?: number
}

export default function ChatGPTCard(props: Props) {
  const { question, onStatusChange, currentTime: propCurrentTime } = props

  return (
    <ChatGPTQuery
      currentTime={propCurrentTime}
      question={question}
      onStatusChange={onStatusChange}
    />
  )
}
