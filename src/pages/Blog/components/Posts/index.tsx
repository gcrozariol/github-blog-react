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

interface PostProps {
  id: string
  title: string
  body: string
  created_at: string
}

interface PostCardProps {
  data: PostProps
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

export function Posts(data: { posts: PostProps[] }) {
  return (
    <PostsContainer>
      {data.posts.map((post) => {
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
