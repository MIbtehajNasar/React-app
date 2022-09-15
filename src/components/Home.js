import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return(
    <div className="container">
      <h4 className="center">Home</h4>
      { error && <div>{ error }</div> }
      {isPending && <div className="container"> Loading....</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}
export default Home
