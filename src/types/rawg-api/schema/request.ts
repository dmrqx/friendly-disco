export type GamesListRequest = AuthedRequest &
  PaginatedRequest & {
    search: string
    genres: string
    platforms: string
    dates: string
  }

type AuthedRequest = {
  key: string
}

type PaginatedRequest = {
  page: number
  page_size: number
}
