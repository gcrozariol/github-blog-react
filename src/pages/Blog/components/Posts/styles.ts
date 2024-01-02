import styled from 'styled-components'

export const PostsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;
  margin-top: 3rem;
`

export const Post = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PostTitle = styled.span`
  display: flex;
  flex-grow: 1;

  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
`

export const PostDate = styled.span`
  font-size: 14px;
  text-align: end;

  min-width: 80px;
  margin-top: 5px;
  color: ${(props) => props.theme['base-span']};
`

export const PostContent = styled.div`
  min-width: 352px;
  height: 90px;

  margin-top: 1.25rem;

  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(props) => props.theme['base-text']};
`
