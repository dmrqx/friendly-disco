import { Game } from '../'

type GameResponseCommon =
  | 'id'
  | 'name'
  | 'slug'
  | 'rating'
  | 'released'
  | 'background_image'

export type GamesListResponse = PaginatedResult<
  Pick<Game, GameResponseCommon | 'suggestions_count'>
>

export type GameDetailResponse = Pick<
  Game,
  | GameResponseCommon
  | 'description'
  | 'website'
  | 'esrb_rating'
  | 'rating'
  | 'ratings'
  | 'platforms'
  | 'genres'
  | 'tags'
  | 'playtime'
>

type PaginatedResult<R> = {
  count: number
  next?: string | null
  previous?: string | null
  results: R[]
}
