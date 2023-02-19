import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import "./css/App.css";
import BlogDetails from "./pages/BlogDetails";
import ErrorNotFound from "./pages/ErrorNotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="brand">Website Muhamad Nur Syami</div>
        <nav className="nav">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
