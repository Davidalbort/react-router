import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button";
import { blogData } from "../../data/blogData";
import { useAuth } from "../../hooks/useAuth";

const BlogPost = () => {
  const auth = useAuth();
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
      {(auth?.user?.isAdmin || auth?.user?.userName===blogPost?.author) && 
      <button>
        Eliminar blog
      </button>
      
      }
    </>
  )
}

export { BlogPost }