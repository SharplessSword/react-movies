import "..//css/MovieCard.css"

function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("clicked")
    }
    return (<div className="movie-card">
      <div className="movie-poster">
        <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="movie-poster" />
        <div className="movie-overlay">
            <button className="favorite-button" onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;