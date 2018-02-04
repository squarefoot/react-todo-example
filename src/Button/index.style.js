import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 0.5em 1em;
  font-size: inherit;
  border-radius: 0.2em;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    cursor: no-drop;
  }
  &.default {
    color: inherit;
    background-color: #ccc;
  }
  &.primary {
    color: #fff;
    background-color: lightgreen;
  }
`;
