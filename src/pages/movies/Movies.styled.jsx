import styled from 'styled-components';
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
