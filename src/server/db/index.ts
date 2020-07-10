import * as mysql from "mysql";
import config from "../config";
import Blogs from "./queries/blogs";
import Tags from "./queries/tags";
import AccessTokens from "./queries/accesstokens";
import Users from "./queries/users";

export const Connection = mysql.createConnection(config.mysql);

Connection.connect((err) => {
  if (err) console.log(err);
});

export default {
  Blogs,
  Tags, 
  AccessTokens,
  Users
};
