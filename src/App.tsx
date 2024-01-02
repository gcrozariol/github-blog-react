import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { useState, useEffect } from 'react'
import { api } from './lib/axios'
import { UserProps } from './pages/Blog/components/Profile'

export function App() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [posts, setPosts] = useState([])

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Blog user={user} posts={posts} />,
    },
    {
      path: 'posts/:postId',
      element: <Post posts={posts} />,
    },
  ])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
