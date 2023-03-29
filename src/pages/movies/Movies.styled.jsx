import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchForm = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid #fd5103;
  margin-bottom: 40px;
  /* overflow: hidden; */
`;

export const Input = styled.input`
  background-color: transparent;
  font-size: 20px;
  border: none;
  padding: 10px;
  outline: none;

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
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
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MoviesImg = styled.img`
  width: 100%;
  /* object-fit: cover; */
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
  height: 100px;
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }
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
