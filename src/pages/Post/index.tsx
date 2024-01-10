import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GitHubContext } from '../../context/GitHubContext'
import { PostContainer } from './styles'
import { Header } from './components/Header'

import Markdown from 'markdown-to-jsx'

export function Post() {
  const { posts } = useContext(GitHubContext)
  const { postId } = useParams()

  const post = posts.find((post) => post.id.toString() === postId)

  if (!post) return

  return (
    <PostContainer>
      <Header />
      <div style={{ padding: '2.5rem 2rem' }}>
        <Markdown>{post.body}</Markdown>
      </div>
    </PostContainer>
  )
}
