import {
  Avatar,
  About,
  Name,
  Description,
  LinksContainer,
  Link,
  GitHubLinkContainer,
  GitHubLinkText,
  GitHubLinkImg,
  ProfileContainer,
} from './styles'

import githubImg from '../../../../assets/github.png'
import companyImg from '../../../../assets/company.png'
import peopleImg from '../../../../assets/people.png'
import linkImg from '../../../../assets/link.png'
import { useContext } from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'

export interface User {
  name: string
  login: string
  avatar_url: string
  followers: number
  company: string
  bio: string
}

export function Profile() {
  const { user } = useContext(GitHubContext)

  if (!user) return

  const { name, login, avatar_url: avatarUrl, followers, company, bio } = user

  return (
    <ProfileContainer>
      <Avatar src={avatarUrl} alt="" />
      <About>
        <Name>{name}</Name>
        <Description>{bio}</Description>

        <LinksContainer>
          <Link>
            <img src={githubImg} alt="" />
            <span>{login}</span>
          </Link>

          {company ? (
            <Link>
              <img src={companyImg} alt="" />
              <span>Rocketseat</span>
            </Link>
          ) : null}

          <Link>
            <img src={peopleImg} alt="" />
            <span>{followers} followers</span>
          </Link>
        </LinksContainer>
      </About>

      <GitHubLinkContainer href={`https://github.com/${login}`} target="_blank">
        <GitHubLinkText>GITHUB</GitHubLinkText>
        <GitHubLinkImg src={linkImg} alt="" />
      </GitHubLinkContainer>
    </ProfileContainer>
  )
}
