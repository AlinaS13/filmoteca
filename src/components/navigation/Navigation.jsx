import { NavLink } from 'react-router-dom';

export const Navigaion = () => {
  return (
    <header className="">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
  );
};
