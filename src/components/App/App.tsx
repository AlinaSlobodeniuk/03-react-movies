import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
    const handleSearchBar = (data: string) => {

    }

    return <div className={css.app}>
        <SearchBar onSubmit={handleSearchBar}/>
    </div>
}