import * as React from "react";
import { useState, useEffect } from "react";
import { json, User } from "../../utils/api";
import { RouteComponentProps } from "react-router";

const AddBlog: React.FC<IAddBlogProps> = (props) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogTag, setBlogTag] = useState("");
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    try {
      let tags = await json("/api/tags");
      setTags(tags);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let blog = {
      title: blogTitle,
      content: blogContent,
      authorid: User.userid,
      tag: blogTag,
    };
    try {
      let result = json("api/blogs", "POST", blog);
      props.history.replace("/");
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    if (!User || User.userid === null) {
      props.history.replace("/login");
    }
    getTags();
  }, []);

  return (
    <div className="container p-4 border border-dk shadow-lg">
      <h4>New Blog</h4>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Blog Title"
          aria-label="Title"
          aria-describedby="basic-addon1"
          onChange={(event) => setBlogTitle(event.target.value)}
        />
      </div>
      <label htmlFor="tag-select">Choose a Tag: </label>
      <select
        onChange={(event) => setBlogTag(event.target.value)}
        name="Tags"
        className="ml-3"
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
          className="form-control"
          rows={8}
          onChange={(event) => setBlogContent(event.target.value)}
          aria-label="Blog Content"
        ></textarea>
      </div>
      <button onClick={handleClick} className="btn btn-primary btn-sm mt-3">
        Submit
      </button>
    </div>
  );
};

interface IAddBlogProps extends RouteComponentProps {}

export default AddBlog;
