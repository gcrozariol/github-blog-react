import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  max-width: 1220px;
  border-radius: 10px;
  padding: 2rem;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const PostTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['base-title']};
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Detail = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};
`

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1.25rem;
`

export const GitHubLinkContainer = styled.a`
  display: flex;

  top: 2.5rem;
  right: 2rem;

  align-items: center;

  gap: 0.5rem;
  text-decoration: none;

  transition: 100ms;

  &:hover {
    cursor: pointer;
    opacity: 75%;
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
