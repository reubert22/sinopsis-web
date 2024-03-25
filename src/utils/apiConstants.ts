const API_BASE_URL: string | undefined = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const API_KEY: string | undefined = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const TRENDING_ALL_URL: string = `${API_BASE_URL}trending/all/day?language=en-US&api_key=${API_KEY}`;
const TRENDING_MOVIE_URL: string = `${API_BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`;
const TRENDING_TV_URL: string = `${API_BASE_URL}trending/tv/day?language=en-US&api_key=${API_KEY}`;
const TRENDING_PERSON_URL: string = `${API_BASE_URL}trending/person/day?language=en-US&api_key=${API_KEY}`;

export {
  API_BASE_URL,
  TRENDING_ALL_URL,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  TRENDING_PERSON_URL,
};
