import styled from 'styled-components'

export const ItemWrapper = styled.div`
  li {
    &:hover {
      cursor: pointer;
    }
    &.completed {
      text-decoration: line-through;
    }
  }
  .highlight {
    background-color: yellow;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;