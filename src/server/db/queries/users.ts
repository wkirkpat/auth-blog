import { Query } from "../index";

//Use this to find an author via their author id
export const findOneById = async (id: string) =>
  Query("SELECT * FROM authors WHERE id = ?", [id]);

//Use to find an author via their email
export const findOneByEmail = async (email: string) =>
  Query("SELECT * FROM authors WHERE email = ?", [email]);

//Use to insert a new author into the database
export const insert = async (email: string, password: string, name: string) =>
  Query("INSERT INTO authors (email, password, name) VALUES (?, ?, ?)", [
    email,
    password,
    name,
  ]);

export default {
  findOneById,
  findOneByEmail,
  insert,
};
