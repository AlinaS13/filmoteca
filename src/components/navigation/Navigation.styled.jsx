import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px 2px gray;
  background-color: rgb(23 83 90);
`;

export const StyleLink = styled(NavLink)`
  font-size: 36px;
  align-items: center;
  margin-right: 10px;
  padding: 4px;
  text-decoration: none;
  border-bottom: 3px solid;
  color: #fff;

  &.active {
    color: #fd5103;
  }
`;
