import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Header } from './components/Header'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { GitHubProvider } from './context/GitHubContext'

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Blog />,
    },
    {
      path: 'posts/:postId',
      element: <Post />,
    },
  ])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <GitHubProvider>
        <RouterProvider router={router} />
      </GitHubProvider>
    </ThemeProvider>
  )
}
