import MovieCard from "../components/MovieCard";

function Home() {
    const movie = [
        { id: 1, title: "Jonh Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "Matrix", release_date: "1998" },   
    ];
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