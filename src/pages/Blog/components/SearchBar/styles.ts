import styled from 'styled-components'

export const SearchBarContainer = styled.div``

export const PostsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
`

export const PostsText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PostsAmountText = styled.span`
  font-size: 14px;
`

export const SearchInput = styled.input`
  width: 100%;

  padding: 0.75rem 1rem;
  margin-top: 0.75rem;

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-text']};

  transition: 100ms;

  :active {
    border-color: ${(props) => props.theme.blue};
  }
`
