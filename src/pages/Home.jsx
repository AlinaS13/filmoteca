import api from 'api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesDay();
      setMovies(result.data.results);
      console.log(result.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
