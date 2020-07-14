import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { json, User } from "../../utils/api";

const Edit: React.FC<IEditProps> = (props) => {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
    authorid: 0,
    name: "",
    id: 0,
  });

  //Need two separate instances of state for tags, one to represent the options available in the dropdown
  //the other to represent the selected tag for this particular blog
  const [tags, setTags] = useState([]);
  const [blogTag, setBlogTag] = useState("");

  const getTags = async () => {
    try {
      let tags = await json("/api/tags");
      setTags(tags);
    } catch (e) {
      console.log(e);
    }
  };

  const getBlog = async () => {
    try {
      let blog = await json(`/api/blogs/${props.match.params.id}`);
      setBlog(blog[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let newBlog = {
      title: blog.title,
      content: blog.content,
      authorid: User.userid,
      tag: blogTag,
    };
    try {
      let results = await json(
        `/api/blogs/${props.match.params.id}`,
        "PUT",
        newBlog
      );
      props.history.replace("/");
    } catch (e) {
      throw e;
    }
  };

  const handleDelete = () => {
    json(`/api/blogs/${props.match.params.id}`, "DELETE");
  };

  useEffect(() => {
    if (!User || User.userid === null) {
      props.history.replace("/login");
    }
    getBlog();
    getTags();
  }, []);

  return (
    <div className="container p-4 border border-dark shadow-lg">
      <h4>Edit Blog</h4>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={`${blog.title}`}
          name="title"
          aria-label="Title"
          aria-describedby="basic-addon1"
          onChange={(e) =>
            setBlog({
              ...blog,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>
      <label htmlFor="tag-select">Choose a Tag:</label>
      <select
        className="ml-3"
        onChange={(event) => setBlogTag(event.target.value)}
        id="tag-select"
      >
        <option value="">Please Select a Tag</option>
        {tags.map((tag) => {
          return (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          );
        })}
      </select>
      <div className="input-group">
        <div className="input-group-prepend"></div>
        <textarea
          className="form-control mb-3"
          rows={8}
          value={`${blog.content}`}
          name="content"
          onChange={(e) =>
            setBlog({
              ...blog,
              [e.target.name]: e.target.value,
            })
          }
          aria-label="Blog Content"
        ></textarea>
      </div>
      <div className=" d-flex justify-content-between">
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
        <button onClick={handleClick} className="btn btn-primary btn-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

interface IEditProps extends RouteComponentProps<{ id: string }> {}

interface Blog {
  title: string;
  content: string;
  authorid: number;
  name: string;
  id: number;
}

export default Edit;
