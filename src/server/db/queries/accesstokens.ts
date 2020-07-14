import { Query } from "../index";

//Finds the token associated to the given user. Selects based on token AND ID
export const findOne = async (id: string, token: string) =>
  Query("SELECT * FROM accesstokens WHERE id = ? AND token = ? ", [id, token]);

//Inserts a new entry into the accesstokens table, but doesn't create the token yet
//The actual token is created in the update query. This simply adds a userid to the table
export const insert = async (userid: number) =>
  Query("INSERT INTO accesstokens(userid) VALUES (?)", [userid]);

//This sets the token of a user to the passed in token
export const update = async (id: string, token: string) =>
  Query("UPDATE accesstokens SET token = ? WHERE id = ?", [token, id]);

export default {
  findOne,
  insert,
  update,
};
