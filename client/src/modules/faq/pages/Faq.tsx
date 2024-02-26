import { PageTitle, QuestionAndAnswer } from '../components'

export function Faq() {
  return (
    <main className={'px-4'}>
      <div className={'container mx-auto'}>
        <PageTitle />
        <div className={'flex flex-col gap-8 mt-8'}>
          <QuestionAndAnswer question={'Pytanie 1'} answer={'Odpowiedź 1'} />
          <QuestionAndAnswer question={'Pytanie 2'} answer={'Odpowiedź 2'} />
        </div>
      </div>
    </main>
  )
}
