import { useParams } from 'react-router-dom'
import { PostProps } from '../Blog/components/Posts'

interface PostDataProps {
  posts: PostProps[]
}

export function Post({ posts }: PostDataProps) {
  const { postId } = useParams()

  const post = posts.find((post) => post.id.toString() === postId)

  if (!post) return

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1120px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span>{post.title}</span>
      <span>{post.body}</span>
    </div>
  )
}
