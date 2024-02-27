import { useMemo } from 'react'
import { Timeline } from '@mantine/core'
import { isEmpty, isNil } from 'lodash'

import { useFaqQuery } from '../api'
import { PageTitle, QuestionAndAnswer } from '../components'

import '@mantine/core/styles/Timeline.css'

export function Faq() {
  const { data, isFetching } = useFaqQuery()

  const isNoData = useMemo(() => isNil(data) || isEmpty(data.faq), [data])

  const renderLoader = useMemo(() => <p>{'Loader...'}</p>, [])
  const renderList = useMemo(
    () => (
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
        {data?.faq.map(({ categoryId, items }) => (
          <Timeline key={categoryId} lineWidth={2} bulletSize={24}>
            {items.map(({ id, question, answer }) => (
              <QuestionAndAnswer key={id} question={question} answer={answer} />
            ))}
          </Timeline>
        ))}
      </div>
    ),
    [data],
  )
  const renderEmptyList = useMemo(() => <p>{'Brak elementów do wyświetlenia'}</p>, [])

  return (
    <main className={'px-4'}>
      <div className={'container max-w-[60vw] mx-auto'}>
        <PageTitle />
        <div className={'flex flex-col gap-8 mt-8'}>
          {isFetching && renderLoader}
          {!isFetching && !isNoData && renderList}
          {!isFetching && isNoData && renderEmptyList}
        </div>
      </div>
    </main>
  )
}
