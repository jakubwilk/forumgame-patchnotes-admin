import { Text, Timeline } from '@mantine/core'
import { IconQuestionMark } from '@tabler/icons-react'
import clsx from 'clsx'

import '@mantine/core/styles/Title.layer.css'
import '@mantine/core/styles/Text.layer.css'
import '@mantine/core/styles/Timeline.css'
import classes from './Components.module.css'

interface IProps {
  question: string
  answer: string
}

export function QuestionAndAnswer({ question, answer }: IProps) {
  return (
    <Timeline.Item
      title={question}
      classNames={{ itemTitle: clsx('inline-block pb-4', classes.question) }}
      bullet={<IconQuestionMark size={'0.8rem'} />}
    >
      <Text className={clsx('mt-2', classes.answer)}>{answer}</Text>
    </Timeline.Item>
  )
}
