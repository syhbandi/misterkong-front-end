import { useStore } from "zustand";
import useUserStore from "../../states/auth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useStore(useUserStore);

  useEffect(() => {
    setUser({});
    localStorage.removeItem("MISTERKONG_ADMIN");
  });

  return <Navigate to={"/admin/login"} />;
};

export default Logout;
