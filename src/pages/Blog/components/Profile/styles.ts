import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`

export const Avatar = styled.img`
  padding: 2rem;
  padding-left: 2.5rem;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['base-title']};

  padding-top: 2.5rem;
  padding-bottom: 0.5rem;
`

export const Description = styled.span`
  padding-bottom: 1.5rem;
  padding-right: 2rem;
  max-width: 630px;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`

export const GitHubLinkContainer = styled.div`
  display: flex;
  position: absolute;

  top: 2.5rem;
  right: 2rem;

  align-items: center;

  gap: 0.5rem;

  :hover {
    cursor: pointer;
  }
`

export const GitHubLinkImg = styled.img`
  width: 12px;
  height: 12px;
`

export const GitHubLinkText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`
