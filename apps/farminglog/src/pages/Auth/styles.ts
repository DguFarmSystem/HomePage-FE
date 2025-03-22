import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #1a1a1a;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;