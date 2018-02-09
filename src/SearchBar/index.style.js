import styled from 'styled-components'

export const SearchBarWrapper =  styled.div`
  input {
    border: none;
    border-bottom: 1px solid lightgreen;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  display: flex;
  justify-content: space-between;
`;