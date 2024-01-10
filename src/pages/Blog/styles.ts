import styled from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: -7rem auto 0;
  padding: 0 1.5rem;
`

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
