import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GitHubContext } from '../../context/GitHubContext'

export function Post() {
  const { posts } = useContext(GitHubContext)
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
