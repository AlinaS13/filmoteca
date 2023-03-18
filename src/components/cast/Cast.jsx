import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api/api';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const result = await api.getMoviesCast(movieId);
      setCast(result.data.cast);
      console.log(result.data.cast);
    };
    fetchCast(movieId);
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
