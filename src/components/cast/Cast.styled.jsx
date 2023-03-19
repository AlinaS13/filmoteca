import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const CastTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 48px;
`;

export const CastText = styled.p`
  text-align: center;
  margin-bottom: 4px;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.06em;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 20px;
  }
`;
