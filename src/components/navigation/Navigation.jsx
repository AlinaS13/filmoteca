import { NavBar, StyleLink } from './Navigation.styled';

export const Navigaion = () => {
  return (
    <NavBar className="">
      <StyleLink to="/">Home</StyleLink>
      <StyleLink to="/movies">Movies</StyleLink>
    </NavBar>
  );
};
