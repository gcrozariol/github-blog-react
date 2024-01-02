import {
  PostsAmountText,
  PostsText,
  PostsInfoContainer,
  SearchInput,
  SearchBarContainer,
} from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <PostsInfoContainer>
        <PostsText>Posts</PostsText>
        <PostsAmountText>7 posts</PostsAmountText>
      </PostsInfoContainer>

      <SearchInput placeholder="Search content" />
    </SearchBarContainer>
  )
}
