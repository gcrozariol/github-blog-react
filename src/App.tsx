import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Blog />,
    },
    {
      path: 'posts/:id',
      element: <Post />,
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
