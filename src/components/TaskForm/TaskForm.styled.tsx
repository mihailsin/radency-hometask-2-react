import styled from "styled-components";
export const Backdrop = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #fff;
`;

export const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  align-self: flex-start;
`;

export const Select = styled.select`
  align-self: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  resize: none;
`;
