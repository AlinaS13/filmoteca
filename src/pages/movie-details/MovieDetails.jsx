import { Container } from 'pages/home/Home.styled';
import { useEffect, useState } from 'react';
import { useLocation, Link, useParams, Outlet } from 'react-router-dom';
import api from '../../api/api';
import {
  MovieDetailsWrap,
  MovieDetail,
  MovieDetailsTitle,
  AditionalInfoTitle,
  AditionalInfoWrap,
  Score,
  Overview,
  Genres,
  StyledLink,
} from './MoviesDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(
    JSON.parse(localStorage.getItem(`movie-${movieId}`)) ?? []
  );
  const location = useLocation();
  const goBackBtn = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await api.getMoviesDetails(movieId);
      setMovie(result.data);
      console.log(result.data);
      localStorage.setItem(`movie-${movieId}`, JSON.stringify(result.data));
    };
    if (movieId) {
      if (!localStorage.getItem(`movie-${movieId}`)) {
        fetchMovie();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <button type="button" className="button">
        <Link to={goBackBtn}>Go Back</Link>
      </button>
      <MovieDetail>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path} `
              : `https://picsum.photos/500/300?image=358`
          }
          alt={movie.title}
        />
        <MovieDetailsWrap>
          {' '}
          <MovieDetailsTitle>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </MovieDetailsTitle>
          <Score>User Score: {(movie.vote_average * 10).toFixed(0)}%</Score>
          <h3>Overview</h3>
          <Overview>{movie.overview}</Overview>
          <h4>Genres</h4>
          <ul>
            {movie.genres
              ? movie.genres.map(genres => {
                  return (
                    <li key={genres.id}>
                      <Genres>{genres.name}</Genres>
                    </li>
                  );
                })
              : ''}
          </ul>
        </MovieDetailsWrap>
      </MovieDetail>
      <AditionalInfoTitle>Aditional information</AditionalInfoTitle>
      <AditionalInfoWrap>
        <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Review</StyledLink>
      </AditionalInfoWrap>
      <Outlet />
    </Container>
  );
}
