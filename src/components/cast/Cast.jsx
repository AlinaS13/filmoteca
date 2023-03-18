import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(
    JSON.parse(localStorage.getItem(`cast-${movieId}`)) ?? []
  );

  useEffect(() => {
    const fetchCast = async () => {
      const result = await api.getMoviesCast(movieId);
      setCast(result.data.cast);
      console.log(result.data.cast);
      localStorage.setItem(`cast-${movieId}`, JSON.stringify(result.data.cast));
    };
    if (!localStorage.getItem(`cast-${movieId}`)) {
      fetchCast(movieId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {cast.map(cast => {
        return (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                  : `https://picsum.photos/200/300?image=259`
              }
              alt={cast.name}
            />
            <h2> {cast.name}</h2>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
