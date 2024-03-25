const API_BASE_URL: string | undefined = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const API_KEY: string | undefined = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const trendingApiUrl = (category: 'all' | 'movie' | 'tv' | 'person') =>
  `${API_BASE_URL}trending/${category}/day?language=en-US&api_key=${API_KEY}`;

const posterApiUrl = (size: 'original' | 'w400' | 'w500') =>
  `https://image.tmdb.org/t/p/${size}`;

export { API_BASE_URL, trendingApiUrl, posterApiUrl };
