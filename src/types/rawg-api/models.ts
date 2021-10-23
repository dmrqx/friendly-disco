export interface Game extends Entity {
  name_original: string
  description: string
  released: string
  tba: boolean
  background_image: string
  website: string
  rating: number
  rating_top: number
  ratings: Rating[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: AddedByStatus
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  user_game: null
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: { platform: Platform }[]
  parent_platforms: { platform: Platform }[]
  genres: Genre[]
  stores: { id: number; store: Store }[]
  clip: null
  tags: Tag[]
  short_screenshots: { id: number; image: string }[]
  esrb_rating: ESRBRating | null
}

export interface ESRBRating extends Entity {}
export interface Genre extends Entity {}
export interface Platform extends Entity {}
export interface Store extends Entity {}
export interface Tag extends Entity {}

export type Rating = {
  id: number
  title: string
  count: number
  percent: number
}

type AddedStatus = 'yet' | 'owned' | 'beaten' | 'toplay' | 'dropped' | 'playing'

export type AddedByStatus = {
  [k in AddedStatus]: number
}

type Entity = {
  id: number
  name: string
  slug: string
}
