import * as React from "react";
import NavbarUser from "./NavbarUser";
import NavbarGuest from "./NavbarGuest";
import { User } from "../../utils/api";
import { useState, useEffect } from "react";

const Navbar = () => {
 const [isLoggedIn, setLogin] = useState(false);

 useEffect(() => {
   if(User.userid){
     setLogin(true);
   }
 }, [])


  if (isLoggedIn) {
    return <NavbarUser />
  } else {
    return <NavbarGuest />
  }
};

export default Navbar;
