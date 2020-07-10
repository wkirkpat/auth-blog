import { Connection } from "../index";

//We are pulling out a token by id and token so we can compare 
//the users token to the token in the database at their id
export const findOne = async (id: string, token:string) => {
    return new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM accesstokens WHERE id = ? AND token = ? ", [id, token], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });   
  };

  export const insert = async (userid: number) => {
    return new Promise((resolve, reject) => {
      Connection.query("INSERT INTO accesstokens(userid) VALUES (?)", [userid], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });   
  };

  export const update = async (id: string, token: string) => {
    return new Promise((resolve, reject) => {
      Connection.query("UPDATE accesstokens SET token = ? WHERE id = ?", [token, id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });   
  };



export default {
    findOne,
    insert,
    update
}