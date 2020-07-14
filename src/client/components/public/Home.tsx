import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { json } from "../../utils/api";

const Home: React.FC<IHomeProps> = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let blogs = await json("/api/blogs");
      setBlogs(blogs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className="container d-flex">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="card col-4 mr-5 shadow-lg">
            <div className="card-body">
              <h5 className="card-title border-bottom p-2">{blog.title}</h5>
              <img
                className="card-img-top border border-dark my-3"
                src="https://run-the-jewels.s3-us-west-1.amazonaws.com/wallpaper/Zoom/RTJ4_ZoomBackground-0520.png"
                alt="Card image cap"
              ></img>
              <h6 className="card-subtitle mb-2 text-muted">By: {blog.name}</h6>
              <Link to={`/blog/${blog.id}`}>
                <button className="btn btn-primary btn-sm">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
};

interface IHomeProps {}

export default Home;
