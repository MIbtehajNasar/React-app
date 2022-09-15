import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete}) => {
  return (
    <div className="container">
      <h2>Blogs</h2>
      { blogs.map(blog => (
        <div key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h5>{ blog.title }</h5>
            <p>Written by { blog.author }</p>
          </Link>
          {/* <button className="btn" onClick={() => handleDelete(blog.id)}>delete blog</button> */}
      </div>
      ))}
    </div>
   );
}

export default BlogList;
