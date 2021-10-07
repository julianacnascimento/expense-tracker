import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  display: flex;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 5px;
  height: 32px;
  padding: 0 5px;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 5px;
  height: 32px;
  padding: 0 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 5px;
  background-color: lightblue;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-size: 15px;

  transition: filter .2s;

  &:hover {
    filter: brightness(.9);
  }
`;