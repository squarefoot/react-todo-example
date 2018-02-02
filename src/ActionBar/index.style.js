import styled from 'styled-components'

export const ActionBarWrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0 1em;
  }
  button:first-child {
    margin-left: 0;
  }
  button:last-child {
    margin-right: 0;
  }
`