import { useContext } from 'react'
import { GitHubContext } from '../../context/GitHubContext'
import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'

import {
  BlogContainer,
  PostsInfoContainer,
  PostsText,
  PostsAmountText,
} from './styles'

export function Blog() {
  const { posts } = useContext(GitHubContext)

  return (
    <BlogContainer>
      <Profile />
      <PostsInfoContainer>
        <PostsText>Posts</PostsText>
        <PostsAmountText>{posts.length} posts</PostsAmountText>
      </PostsInfoContainer>

      <SearchBar />
      <Posts />
    </BlogContainer>
  )
}
