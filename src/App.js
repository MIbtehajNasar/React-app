import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Contact from "./components/Contact"
import CreateBlog from "./components/CreateBlog";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-blog' element={<CreateBlog/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
