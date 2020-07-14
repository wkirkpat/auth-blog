import { Query } from "../index";

//Gets all blog tags associated with a particular blog ID
export const getBlogTags = async (id: string) =>
  Query("Call spBlogTags(?)", [id]);

//Gets all possible tags for displaying in a list
export const getAllTags = async () => Query("SELECT * from tags");

export default {
  getAllTags,
  getBlogTags,
};
