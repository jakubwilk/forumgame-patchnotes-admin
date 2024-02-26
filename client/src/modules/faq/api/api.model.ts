export interface IFaqResponse {
  faq: Array<IFaqResponseItem>
}

export interface IFaqResponseItem {
  id: number
  question: string
  answer: string
}

export enum API_FAQ_KEYS_ENUM {
  GET_FAQ = 'GET_FAQ',
}
