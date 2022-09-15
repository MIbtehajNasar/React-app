import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id)
  return (
    <div className="container">
      <h4 className="center">Blog</h4>
      { error && <div>{ error }</div> }
      {isPending && <div className="container"> Loading....</div>}
      {blog && (
        <article>
          <h5>{ blog.title }</h5>
          <p>{ blog.body }</p>
          <p>Written by { blog.author }</p>
        </article>
      )}
    </div>
   );
}

export default BlogDetails;
