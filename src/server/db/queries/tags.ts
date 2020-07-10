import { Connection } from "../index";

//This pulls back all the tags associated to a specific blog
export const getBlogTags = async (id: string) => {
    return new Promise((resolve, reject) => {
      Connection.query("Call spBlogTags(?)", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };
  
  //This is used to get all the tags to display in the dropdown menu when you select a tag for a blog
  export const getAllTags = async () => {
    return new Promise((resolve, reject) => {
      Connection.query("SELECT * from tags", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };

  export default {
      getAllTags,
      getBlogTags
  }