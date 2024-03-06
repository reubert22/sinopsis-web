'use client'

import {
  useMemo,
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'

export interface ITrendingItem {
  adult: boolean
  backdrop_path: string
  id: number
  name?: string
  title?: string
  original_language: string
  original_name?: string
  original_title?: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: any[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: any[]
}

export interface TrendingContextProps {
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
  trending: ITrendingItem[]
}

export async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}trending/all/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch response')
  }

  return response.json()
}

export const TrendingProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<string>('')
  const [trending, setTrending] = useState<ITrendingItem[]>([])

  const handleGetTrending = async () => {
    const response = await getData()

    setTrending(response.results || [])
  }

  useEffect(() => {
    handleGetTrending()
  }, [])

  const filteredTrending = useMemo(
    () =>
      trending.filter((t) =>
        (t.name || t.title)?.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, trending]
  )

  return (
    <TrendingContext.Provider
      value={{
        filter,
        setFilter,
        trending: filteredTrending,
      }}
    >
      {children}
    </TrendingContext.Provider>
  )
}

export const TrendingContext = createContext<TrendingContextProps | null>({
  filter: '',
  setFilter: () => {},
  trending: [],
})

export const useTrending = () => useContext(TrendingContext)!
