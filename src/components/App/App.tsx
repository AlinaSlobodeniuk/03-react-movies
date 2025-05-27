import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { Movie } from "../../types/movie";
import { getMovies } from "../../services/movieService";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
     const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

    const handleSearchBar = async (query: string) => {
        setIsLoading(true);
      setIsError(false);
      setMovies([]);
        try {
            const results = await getMovies(query);
            if (results.length === 0) {
                toast.error("Please enter your search query.");
            }
            setMovies(results);
        } catch {
             setIsError(true);
        } finally {
             setIsLoading(false);
        }
    }

    return <div className={css.app}>
        <SearchBar onSubmit={handleSearchBar}/>
    </div>
}