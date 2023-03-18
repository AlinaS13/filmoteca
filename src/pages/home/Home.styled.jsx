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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 24px;
  justify-content: center;
  /* @include tablet {
    display: grid;
    grid-template-columns: repeat(2, 335px);
    gap: 32px;
    margin-bottom: 24px;
  }
  @include desktop {
    display: grid;
    grid-template-columns: repeat(3, 395px);
    gap: 32px;
  } */
`;

export const MoviesItem = styled.li`
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  border-radius: 4px;
  border: 1px solid #fd5103;
`;

export const LinkStyled = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  overflow: hidden;
`;

export const MoviesImg = styled.img`
  /* width: 300px;
  display: block; */
`;

export const MoviesTitle = styled.p`
  display: block;
  margin-top: 48px;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  @include font(900, 26px, 42px, 1.5);
  color: var(--dark-text-color);
  @include tablet {
    margin-top: 20px;
    margin-bottom: 25px;
    @include font(900, 28px, 33px, 1.5);
  }
  @include desktop {
    margin-bottom: 27px;
    margin-top: 0px;

    @include font(900, 29px, 38px, 1.5);
  }
`;
