import { Text, Title } from '@mantine/core'
import clsx from 'clsx'

import '@mantine/core/styles/Title.layer.css'
import '@mantine/core/styles/Text.layer.css'
import classes from './Components.module.css'

interface IProps {
  question: string
  answer: string
}

export function QuestionAndAnswer({ question, answer }: IProps) {
  return (
    <article>
      <Title order={3} className={clsx('inline-block pb-2 mb-2', classes.question)}>
        {question}
      </Title>
      <Text className={classes.answer}>{answer}</Text>
    </article>
  )
}
