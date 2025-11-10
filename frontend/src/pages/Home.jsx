import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import { searchMovies, getPoplularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPoplularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load popular movies.");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, [])
    const handleSearch = () => {};

    return (
    <div className="home">
        <div className="movie-grid">
            {movie.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
    );
}    

export default Home;