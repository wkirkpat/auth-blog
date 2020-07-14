import * as React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import { json, setAccessToken, User } from "../../utils/api";

const Register: React.FC<IRegisterProps> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json("/auth/register", "POST", {
        name,
        email,
        password,
      });
      if(result) {
          setAccessToken(result.token, {userid: result.userid, role: result.role})
      }
    } catch (e) {
      throw e;
    } finally {
        props.history.replace("/");
    }
  };

  return (
    <>
      <div className="form-group container border border-dark shadow-lg p-2">
        <h4>Register New User</h4>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Create Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

interface IRegisterProps extends RouteComponentProps {}

export default Register;
