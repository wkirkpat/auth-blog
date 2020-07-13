import { Connection } from "../index";

export const getBlogs = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT authors.name, blogs.* FROM blogs JOIN authors ON blogs.authorid = authors.id",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export const getBlog = async (id: string) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT authors.name, blogs.* FROM blogs JOIN authors ON blogs.authorid = authors.id where blogs.id = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

//Creates a new blog, gets the author id from the logged in user
export const newBlog = async (
  title: string,
  content: string,
  authorid: string,
  tag: string
) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "call spNewBlog(?,?,?,?)",
      [title, content, authorid, tag],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

//Will cascade delete the blogtag records that reference the deleted blog
export const deleteBlog = async (id: string) => {
  return new Promise((resolve, reject) => {
    Connection.query("Delete from blogs where id = ?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });   
};

//spUpdateBlog works almsot identically to spNewBlog except it updates an existing record
//which means you have to also need the id of the existing record
export const updateBlog = async (
  title: string,
  content: string,
  authorid: string,
  tag: string,
  id: string
) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "CALL spUpdateBlog(?,?,?,?,?)",
      [title, content, authorid, tag, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export default {
    getBlogs,
    getBlog,
    newBlog,
    updateBlog,
    deleteBlog
}