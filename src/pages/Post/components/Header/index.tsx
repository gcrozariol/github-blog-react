import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistance, subDays } from 'date-fns'

import { GitHubContext } from '../../../../context/GitHubContext'

import {
  About,
  PostTitle,
  Detail,
  DetailsContainer,
  GitHubLinkContainer,
  GitHubLinkText,
  GitHubLinkImg,
  HeaderContainer,
  HeaderLinks,
} from './styles'

import githubImg from '../../../../assets/github.png'
import companyImg from '../../../../assets/company.png'
import peopleImg from '../../../../assets/people.png'
import linkImg from '../../../../assets/link.png'
import backArrowImg from '../../../../assets/back-arrow.png'

export function Header() {
  const { postId } = useParams()
  const { user, posts } = useContext(GitHubContext)

  const post = posts.find((post) => post.id.toString() === postId)

  if (!post || !user) return

  const date = formatDistance(
    subDays(new Date(post.created_at), 0),
    new Date(),
    {
      addSuffix: true,
    },
  )

  return (
    <HeaderContainer>
      <HeaderLinks>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <GitHubLinkImg src={backArrowImg} alt="" />
          <GitHubLinkText>BACK</GitHubLinkText>
        </Link>

        <GitHubLinkContainer href={post.html_url} target="_blank">
          <GitHubLinkText>VIEW ON GITHUB</GitHubLinkText>
          <GitHubLinkImg src={linkImg} alt="" />
        </GitHubLinkContainer>
      </HeaderLinks>

      <About>
        <PostTitle>{post.title}</PostTitle>

        <DetailsContainer>
          <Detail href={`https://github.com/${user.login}`} target="_blank">
            <img src={githubImg} alt="" />
            <span>{user.login}</span>
          </Detail>

          <Detail>
            <img src={companyImg} alt="" />
            <span>{date}</span>
          </Detail>

          <Detail href={post.html_url} target="_blank">
            <img src={peopleImg} alt="" />
            <span>{post.comments} comments</span>
          </Detail>
        </DetailsContainer>
      </About>
    </HeaderContainer>
  )
}
