import { useEffect, useState } from 'react';
import { useLocation, Link, useParams, Outlet } from 'react-router-dom';
import api from '../api/api';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackBtn = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await api.getMoviesDetails(movieId);
      setMovie(result.data);
      console.log(result.data);
    };
    if (movieId) {
      fetchMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button type="button">
        <Link to={goBackBtn}>Go Back</Link>
      </button>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path} `
              : `https://picsum.photos/500/300?image=358`
          }
          alt={movie.title}
        />
        <h2>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h2>
        <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres
            ? movie.genres.map(genres => {
                return <li key={genres.id}>{genres.name}</li>;
              })
            : ''}
        </ul>
      </div>
      <p>Aditional information</p>
      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Review</Link>
      </div>
      <Outlet />
    </div>
  );
}
