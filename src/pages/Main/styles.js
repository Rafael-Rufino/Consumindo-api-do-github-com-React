/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: red;
  border: 0;
  color: white;
  margin-left: 10px;
  padding: 0 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li + li {
    border-top: 1px solid #eee;
  }

  a {
    color: #7159c1;
    text-decoration: none;
  }
`;
