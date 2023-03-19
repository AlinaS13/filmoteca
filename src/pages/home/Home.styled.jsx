import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 33px;
    padding-right: 33px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 68px;
`;

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const MoviesItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const LinkStyled = styled(NavLink)`
  display: block;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const MoviesImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MoviesTitle = styled.h2`
  text-align: center;
  margin-bottom: 4px;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.06em;
  min-height: 100px;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 20px;
  }
`;
