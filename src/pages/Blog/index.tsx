import { useEffect, useState } from 'react'
import { Posts } from './components/Posts'
import { Profile, UserProps } from './components/Profile'
import { SearchBar } from './components/SearchBar'

import {
  BlogContainer,
  PostsInfoContainer,
  PostsText,
  PostsAmountText,
} from './styles'

import { api } from '../../lib/axios'

export function Blog() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await api.get('users/gcrozariol')

      if (response.status !== 200) return
      setUser(response.data)
    }

    async function getPosts() {
      const response = await api.get(
        'repos/gcrozariol/github-blog-react/issues',
      )

      if (response.status !== 200) return
      setPosts(response.data)
    }

    getUser()
    getPosts()
  }, [])

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
