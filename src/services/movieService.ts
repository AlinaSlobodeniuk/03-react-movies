import axios from "axios";
import { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

interface MovieProps{
    hits: Movie[];
}

export const getMovies = async (query: string): Promise<Movie[]> => {
    const { data } = await axios.get<MovieProps>(
        BASE_URL,
        {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }
}
    );
    return data.hits;
};