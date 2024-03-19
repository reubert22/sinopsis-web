const API_BASE_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const TRENDING_ALL_URL: string = `${API_BASE_URL}trending/all/day?language=en-US&api_key=${API_KEY}`;

export { API_BASE_URL, TRENDING_ALL_URL };
