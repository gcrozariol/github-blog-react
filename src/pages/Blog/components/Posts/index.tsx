import {
  PostsContainer,
  Post,
  PostHeader,
  PostTitle,
  PostDate,
  PostContent,
} from './styles'

interface PostProps {
  id: string
  title: string
  content: string
  createdAt: string
}

interface PostCardProps {
  data: PostProps
}

function PostCard({ data }: PostCardProps) {
  const { title, content, createdAt } = data

  return (
    <Post>
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostHeader>
      <PostContent>{content}</PostContent>
    </Post>
  )
}

export function Posts() {
  const posts = [
    {
      id: '1',
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types',
      createdAt: '2 days ago',
    },
    {
      id: '2',
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types',
      createdAt: '2 days ago',
    },
  ]

  return (
    <PostsContainer>
      {posts.map((post) => {
        return <PostCard key={post.id} data={post} />
      })}
    </PostsContainer>
  )
}
