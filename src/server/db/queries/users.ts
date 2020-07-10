import { Connection } from "../index";

//When calling this function, the type is what column you want to search users by and the value is what you want to pick out of that column
//Will be primarily used to search by email and id
export const findOneUserBy = async (type: string, value: number | string) => {
    return new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM authors WHERE ? = ?", [type, value], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });   
  };

  //Here were are inserting a new user into the authors table when a new account is registered
  export const insert = async (user: any) => {
    return new Promise((resolve, reject) => {
      Connection.query("INSERT INTO authors (email, password, name) VALUES (?)", [user], (err, results) => {
        if (err) {
          return reject(err)
        }
        resolve(results);
      })
    })
  }

export default {
    findOneUserBy,
    insert
}