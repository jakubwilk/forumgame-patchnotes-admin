import { useMemo } from 'react'
import { isEmpty, isNil } from 'lodash'

import { useFaqQuery } from '../api'
import { PageTitle, QuestionAndAnswer } from '../components'

export function Faq() {
  const { data, isFetching } = useFaqQuery()

  const isNoData = useMemo(() => isNil(data) || isEmpty(data.faq), [data])

  const renderLoader = useMemo(() => <p>{'Loader...'}</p>, [])
  const renderList = useMemo(
    () =>
      data?.faq.map(({ id, question, answer }) => (
        <QuestionAndAnswer key={id} question={question} answer={answer} />
      )),
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
