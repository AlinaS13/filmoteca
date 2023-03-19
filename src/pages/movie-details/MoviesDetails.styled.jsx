import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetail = styled.div`
  padding-top: 40px;
  display: flex;
`;

export const MovieDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;

export const MovieDetailsTitle = styled.h2`
  height: 100px;
  min-height: 100px;
  font-weight: 900;
  font-size: 48px;
`;

export const AditionalInfoTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 48px;
`;

export const AditionalInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Score = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;
export const Genres = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 4px;
  margin-top: 0;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 4px;
  margin-top: 0;
  &:hover {
    color: #fd5103;
  }
  &.active {
    color: #fd5103;
  }
`;
