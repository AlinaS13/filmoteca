import api from 'api/api';
import { useEffect, useState } from 'react';

import {
  Container,
  MainTitle,
  MoviesItem,
  MoviesList,
  MoviesImg,
  MoviesTitle,
  // MoviesItemWrap,
  LinkStyled,
} from './Home.styled';

export default function Home() {
  const [moviesDay, setMoviesDay] = useState(
    JSON.parse(localStorage.getItem('movies-day')) ?? []
  );

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesDay();
      setMoviesDay(result.data.results);
      console.log(result.data.results);
      localStorage.setItem('movies-day', JSON.stringify(result.data.results));
    };
    if (!localStorage.getItem('movies-day')) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <main>
        <MainTitle>Trending today</MainTitle>
        <div>
          <MoviesList>
            {moviesDay.map(({ title, id, poster_path }) => {
              return (
                <MoviesItem key={id}>
                  <LinkStyled to={`movies/${id}`}>
                    <MoviesImg
                      src={`https://image.tmdb.org/t/p/w500${poster_path} `}
                      alt={title}
                      width={200}
                    />
                    <MoviesTitle>{title}</MoviesTitle>
                  </LinkStyled>
                </MoviesItem>
              );
            })}
          </MoviesList>
        </div>
      </main>
    </Container>
  );
}
