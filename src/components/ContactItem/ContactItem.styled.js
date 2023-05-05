import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 4px;
  border-color: grey;
  padding: 0 6px;

  :active {
    background-color: lightblue;
  }
`;
