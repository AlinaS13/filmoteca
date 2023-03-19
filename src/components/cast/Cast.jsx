import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import {
  CastImg,
  CastItem,
  CastList,
  CastText,
  CastTitle,
} from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(
    JSON.parse(localStorage.getItem(`cast-${movieId}`)) ?? []
  );

  useEffect(() => {
    const fetchCast = async () => {
      const result = await api.getMoviesCast(movieId);
      setCast(result.data.cast);
      // console.log(result.data.cast);
      localStorage.setItem(`cast-${movieId}`, JSON.stringify(result.data.cast));
    };
    if (!localStorage.getItem(`cast-${movieId}`)) {
      fetchCast(movieId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CastList>
      {cast.map(cast => {
        return (
          <CastItem key={cast.id}>
            <CastImg
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : `https://picsum.photos/600/900?image=259`
              }
              alt={cast.name}
            />
            <CastTitle> {cast.name}</CastTitle>
            <CastText>Character: {cast.character}</CastText>
          </CastItem>
        );
      })}
    </CastList>
  );
}
