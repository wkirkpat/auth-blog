import * as fetch from "isomorphic-fetch";

export let AccessToken: string = localStorage.getItem("token") || null;
export let User: any = {
  userid: localStorage.getItem("userid") || null,
  role: localStorage.getItem("role") || null,
};

// This is a helper function to make writing fetch requests easier. Instead of having to write out
// All the code in a fetch request, simply call this function and pass in the uri (whatever endpoint you are making the request to),
// the method, and the body if it has one. This will also set a bearer token for the user if an access token exists.
// Lastly, there is no need to stringify or res.json anything with this because it is handled within this function, so it can
// take in javascript and returns javascript to us.
export const json = async <T = any>(
  uri: string,
  method: string = "GET",
  body?: {}
) => {
  let headers: any = {
    "Content-type": "application/json",
  };

  if (AccessToken) {
    headers["Authorization"] = `Bearer ${AccessToken}`;
  }

  try {
    let result = await fetch(uri, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    if (result.ok) {
      return <T>await result.json();
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

// This function just allows us to set the access token to the users credentials, will typically be used when a user logs in.
export const setAccessToken = (
  token: string,
  user: {} = { userid: undefined, role: "guest" }
) => {
  AccessToken = token;
  User = user;

  localStorage.setItem("token", token);
  localStorage.setItem("userid", User.userid);
  localStorage.setItem("role", User.role);
};
