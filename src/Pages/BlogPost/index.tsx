import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button";
import { blogData } from "../../data/blogData";

const BlogPost = () => {
  const navigation = useNavigate();
  const params = useParams();
  const blogPost = blogData.find(post => post.slug===params.slug)
  const backBlog = () => {
    navigation('/blog')
  }
  return(
    <>
      <h3>{blogPost?.title}</h3>
      <Button 
        name="back to blog"
        handleClick={backBlog}
      />
      <p>{blogPost?.content}</p>
      <span>{blogPost?.author}</span>
    </>
  )
}

export { BlogPost }