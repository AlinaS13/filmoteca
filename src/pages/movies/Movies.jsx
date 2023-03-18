import { Container } from 'pages/home/Home.styled';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../api/api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(`search-${searchQuery}`)) ?? []
  );

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      const result = await api.getMoviesQuery(query);
      setMovies(result.data.results);
      console.log(result.data.results);
      localStorage.setItem(
        `search-${query}`,
        JSON.stringify(result.data.results)
      );
    };

    if (query) {
      if (localStorage.getItem(`search-${query}`)) {
        setMovies(JSON.parse(localStorage.getItem(`search-${query}`)));
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
      console.log(result.data.results);
      localStorage.setItem(
        `search-${searchQuery}`,
        JSON.stringify(result.data.results)
      );
    };
    if (searchQuery && !localStorage.getItem(`search-${searchQuery}`)) {
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="searchfield"
            type="text"
            autoComplete="off"
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: `/movies?${searchParams}` }}>
                {title}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
