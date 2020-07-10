import { Connection } from "../index";

//Here we're pulling out a user by its id, primarily to validate tokens
export const findOneById = async (id: string) => {
    return new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM authors WHERE id = ?", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        console.log(results);
        resolve(results);
      });
    });   
  };

  //grabbing a user by email, primarily for 
  export const findOneByEmail = async (email: string) => {
    return new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM authors WHERE email = ?", [email], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });   
  };

  //Here were are inserting a new user into the authors table when a new account is registered
  export const insert = async (email: string, password: string, name: string) => {
    return new Promise((resolve, reject) => {
      Connection.query("INSERT INTO authors (email, password, name) VALUES (?, ?, ?)", [email, password, name], (err, results) => {
        if (err) {
          return reject(err)
        }
        resolve(results);
      })
    })
  }

export default {
    findOneById,
    findOneByEmail,
    insert
}