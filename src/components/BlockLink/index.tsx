import {Link} from 'react-router-dom';

interface PropsBlockLink {
  
  post:{
    title: string,
    slug: string,
    content: string,
    author: string
  }
}
const BlockLink = ({post}: PropsBlockLink) => {
  return(
    <li>
      <Link
        to={`/blog/${post.slug}`}
      >
        {post.title}
      </Link>
    </li>
  )
}

export { BlockLink }