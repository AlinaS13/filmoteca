import { Container } from 'pages/home/Home.styled';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import api from '../../api/api';
import {
  Input,
  MoviesImg,
  MoviesItem,
  MoviesList,
  MoviesTitle,
  SearchForm,
  SearchWrap,
} from './Movies.styled';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem(`search-${searchQuery}`)) ?? []
  );

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      const result = await api.getMoviesQuery(query);
      setMovies(result.data.results);
      // console.log(result.data.results);
      sessionStorage.setItem(
        `search-${query}`,
        JSON.stringify(result.data.results)
      );
    };

    if (query) {
      if (sessionStorage.getItem(`search-${query}`)) {
        setMovies(JSON.parse(sessionStorage.getItem(`search-${query}`)));
      } else {
        fetchMovieByQuery();
      }
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      const result = await api.getMoviesQuery(searchQuery);
      setMovies(result.data.results);
      // console.log(result.data.results);
      sessionStorage.setItem(
        `search-${searchQuery}`,
        JSON.stringify(result.data.results)
      );
    };
    if (searchQuery && !sessionStorage.getItem(`search-${searchQuery}`)) {
      fetchMovieByQuery();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.target.searchfield.value);
    setSearchParams({ query: event.target.searchfield.value });
  };

  return (
    <Container>
      <SearchWrap>
        <SearchForm onSubmit={handleSubmit}>
          <Input
            name="searchfield"
            type="text"
            autoComplete="off"
            placeholder="Search movies"
          />
          <button type="submit" className="button">
            Search
          </button>
        </SearchForm>
      </SearchWrap>
      <MoviesList>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <MoviesItem key={id}>
              <NavLink to={`${id}`} state={{ from: `/movies?${searchParams}` }}>
                <MoviesImg
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path} `
                      : `https://picsum.photos/500/300?image=358`
                  }
                  alt={title}
                  width={200}
                  height={250}
                />
                <MoviesTitle> {title} </MoviesTitle>
              </NavLink>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </Container>
  );
}
