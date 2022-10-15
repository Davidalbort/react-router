import { BlockLink } from '../../components/BlockLink'
import { blogData } from '../../data/blogData'

const BlogPage = () => {
  return(
    <>
      <h1>BlogPage</h1>
      <ul>
      {blogData.map(((post,index) => (
        <BlockLink 
          post={post}
          key={index+post.slug}
        />
      )))}

      </ul>
    </>
  )
}

export { BlogPage }