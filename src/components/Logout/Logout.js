import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Logout() {
  const { onLogoutClick } = useContext(AuthContext);

  useEffect(()=>{
    onLogoutClick()
  },[onLogoutClick])

  return <Navigate to='/' />

};
