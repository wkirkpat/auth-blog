import { Query } from "../index";

//Gets all blogs for displaying on the front page. Also grabs the associated author name from the authors table
export const getBlogs = async () =>
  Query("SELECT authors.name, blogs.* FROM blogs JOIN authors ON blogs.authorid = authors.id", []);

//Gets one blog based on the id of the blog, like the above query it also gets the author name
export const getBlog = async (id: string) =>
  Query(
    "SELECT authors.name, blogs.* FROM blogs JOIN authors ON blogs.authorid = authors.id where blogs.id = ?",
    [id]
  );

//Creates a new blog. Sets author name based on who is logged in. spNewBlog has functionality to create new tags as well, just
//requires an interface on the front end to allow it happen. As is, blogs require a single tag to be created.
export const newBlog = async (
  title: string,
  content: string,
  authorid: string,
  tag: string
) => Query("CALL spNewBlog(?,?,?,?)", [title, content, authorid, tag]);

//Deletes a blog based on given blog id
export const deleteBlog = async (id: string) =>
  Query("DELETE FROM blogs WHERE id = ?", [id]);

//Works almost exactly the same as the new blog query except it updates an existing record
//So therefore it needs the id of the blog being edited
export const updateBlog = async (
  title: string,
  content: string,
  authorid: string,
  tag: string,
  id: string
) => Query("CALL spUpdateBlog(?,?,?,?,?)", [title, content, authorid, tag, id]);

export default {
  getBlogs,
  getBlog,
  newBlog,
  updateBlog,
  deleteBlog,
};
