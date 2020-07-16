import * as mysql from "mysql";
import config from "../config";
import Blogs from "./queries/blogs";
import Tags from "./queries/tags";
import AccessTokens from "./queries/accesstokens";
import Users from "./queries/users";

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values: any) => {
  return new Promise<T>((resolve, reject) => {
    const sql = mysql.format(query, values);
    console.log(sql);

    pool.query(sql, (err, results) => {
      if(err) return reject(err);
      else return resolve(results);
    })
  })
}

export default {
  Blogs,
  Tags,
  AccessTokens,
  Users,
};
