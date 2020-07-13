import React, { useState, useEffect, ReactEventHandler } from "react";
import { RouteComponentProps } from "react-router";
import { json, setAccessToken, User } from "../../utils/api";

const Login: React.FC<ILoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      let result = await json("/auth/login", "POST", {
        email: email,
        password: password,
      });

      if(result) {
        setAccessToken(result.token, {userid: result.userid, role: result.role});
      } else {
        //check login status
      }

    } catch (e) {
      throw e;
    } finally {
        props.history.replace("/add");
    }
  };

  useEffect(() =>{
      if(User) {
          props.history.replace("/add");
      }
  })

  return (
    <>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </>
  );
};

interface ILoginProps extends RouteComponentProps {}

export default Login;
