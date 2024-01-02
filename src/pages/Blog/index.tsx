import { PostProps, Posts } from './components/Posts'
import { Profile, UserProps } from './components/Profile'
import { SearchBar } from './components/SearchBar'

import {
  BlogContainer,
  PostsInfoContainer,
  PostsText,
  PostsAmountText,
} from './styles'
interface BlogProps {
  user: UserProps | null
  posts: PostProps[]
}

export function Blog({ user, posts }: BlogProps) {
  return user ? (
    <BlogContainer>
      <Profile data={user} />

      <PostsInfoContainer>
        <PostsText>Posts</PostsText>
        <PostsAmountText>{posts.length} posts</PostsAmountText>
      </PostsInfoContainer>

      <SearchBar />
      {posts.length ? <Posts posts={posts} /> : null}
    </BlogContainer>
  ) : null
}
