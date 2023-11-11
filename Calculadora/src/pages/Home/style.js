import styled from "styled-components";

export const Main = styled.main`
  background-color: #000;
  height: 100px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 25px;
  border: none;
  border-radius: 32px;
  margin: 8px;
  cursor: pointer;
`;
