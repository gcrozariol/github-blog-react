import { Link } from 'react-router-dom'
import { formatDistance, subDays } from 'date-fns'
import {
  PostsContainer,
  Post,
  PostHeader,
  PostTitle,
  PostDate,
  PostContent,
} from './styles'
import { useContext } from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'

export interface Post {
  id: number
  title: string
  body: string
  created_at: string
}

interface PostCardProps {
  data: Post
}

function PostCard({ data }: PostCardProps) {
  const { title, body, created_at: createdAt } = data

  const date = formatDistance(subDays(new Date(createdAt), 0), new Date(), {
    addSuffix: true,
  })

  return (
    <Post>
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
      </PostHeader>
      <PostContent>{body}</PostContent>
    </Post>
  )
}

export function Posts() {
  const { posts } = useContext(GitHubContext)

  if (posts.length === 0) return

  return (
    <PostsContainer>
      {posts.map((post) => {
        return (
          <Link
            to={`/posts/${post.id}`}
            key={post.id}
            style={{ textDecoration: 'none' }}
          >
            <PostCard data={post} />
          </Link>
        )
      })}
    </PostsContainer>
  )
}
