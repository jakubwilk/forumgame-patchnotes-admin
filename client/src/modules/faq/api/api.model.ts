export interface IFaqResponse {
  faq: Array<IFaqResponseItem>
}

export interface IFaqResponseItem {
  categoryId: number
  items: Array<IFaqResponseCategoryItem>
}

export interface IFaqResponseCategoryItem {
  id: number
  question: string
  answer: string
}

export enum API_FAQ_KEYS_ENUM {
  GET_FAQ = 'GET_FAQ',
}
