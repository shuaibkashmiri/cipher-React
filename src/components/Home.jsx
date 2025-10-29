import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("description", description);
  formdata.append("image", image);

  const createBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/blog/create";
      const res = await axios.post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const url = "http://localhost:5000/api/blog/all";
      const res = await axios.get(url);
      setBlogs(res.data.blogs);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    console.log(blogs);
  }, [loading]);

  return (
    <>
      <ToastContainer />
      <div className="home">
        <div className="home-container">
          {/* Create Post Card */}
          <div className="create-post-card">
            <div className="create-post-header">
              <div className="user-avatar">U</div>
              <div className="create-post-prompt">What's on your mind?</div>
            </div>

            <form onSubmit={createBlog} className="blog-post">
              <div className="post-input-group">
                <input
                  type="text"
                  placeholder="What's the title of your post?"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="post-title-input"
                  required
                />
                <textarea
                  placeholder="Share your thoughts..."
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="post-textarea"
                  required
                />

                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image && (
                  <div className="selected-file-info">
                    <span className="file-name">Selected: {image.name}</span>
                  </div>
                )}
              </div>

              <div className="post-actions">
                <div className="post-media-actions"></div>
                <button
                  type="submit"
                  className="post-btn"
                >
                  {loading ? "Posting..." : "Post"}

                </button>
              </div>
            </form>
          </div>

          {/* Social Media Feed */}
          <div className="social-feed">
            {blogs.map((blog, index) => (
              <div key={index} className="social-post">
                <div className="post-content">
                  <h3 className="post-title">{blog.title}</h3>
                  <p className="post-description">{blog.description}</p>
                  {blog.photoUrl && (
                    <img
                      src={blog.photoUrl}
                      alt={blog.title}
                      className="post-image"
                    />
                  )}
                </div>

                <div className="post-actions">
                  <button className="post-action-btn like-btn">Like</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
