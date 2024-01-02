import { createContext, ReactNode, useEffect, useState } from 'react'

import { User } from '../pages/Blog/components/Profile'
import { Post } from '../pages/Blog/components/Posts'
import { api } from '../lib/axios'

interface GitHubContextType {
  user: User | null
  posts: Post[]
}

export const GitHubContext = createContext({} as GitHubContextType)

interface GitHubProviderProps {
  children: ReactNode
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function getUser() {
      const response = await api.get('users/gcrozariol')

      if (response.status !== 200) return
      setUser(response.data)
    }

    async function getPosts() {
      const response = await api.get(
        'repos/gcrozariol/github-blog-react/issues',
      )

      if (response.status !== 200) return
      setPosts(response.data)
    }

    getUser()
    getPosts()
  }, [])

  return (
    <GitHubContext.Provider value={{ user, posts }}>
      {children}
    </GitHubContext.Provider>
  )
}
