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
import avatarImg from '../../../../assets/avatar.png'
import linkImg from '../../../../assets/link.png'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatarImg} alt="" />
      <About>
        <Name>Guilherme Crozariol</Name>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <LinksContainer>
          <Link>
            <img src={githubImg} alt="" />
            <span>gcrozariol</span>
          </Link>
          <Link>
            <img src={companyImg} alt="" />
            <span>Rocketseat</span>
          </Link>
          <Link>
            <img src={peopleImg} alt="" />
            <span>32 followers</span>
          </Link>
        </LinksContainer>
      </About>
      <GitHubLinkContainer>
        <GitHubLinkText>GITHUB</GitHubLinkText>
        <GitHubLinkImg src={linkImg} alt="" />
      </GitHubLinkContainer>
    </ProfileContainer>
  )
}
