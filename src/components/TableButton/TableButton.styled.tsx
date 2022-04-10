import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
