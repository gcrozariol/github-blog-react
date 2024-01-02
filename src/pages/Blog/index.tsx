import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchBar />
    </BlogContainer>
  )
}
