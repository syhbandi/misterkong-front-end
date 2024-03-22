import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";
import Navbar from "../../components/admin/Navbar";
import {
  Navigate,
  Outlet,
  ScrollRestoration,
  useNavigate,
} from "react-router-dom";
import { useStore } from "zustand";
import useUserStore, { userType } from "../../states/auth";
import { useQuery } from "@tanstack/react-query";
import { refreshToken } from "../../api/auth";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TopBarProgress from "react-topbar-progress-indicator";
const Index = () => {
  const navigate = useNavigate();
  const { user, setUser } = useStore(useUserStore);

  if (!user.access_token) return <Navigate to={"/admin/login"} />;

  const query = useQuery({
    queryKey: ["refreshToken"],
    queryFn: () => refreshToken({ user }),
    refetchInterval: 1000 * 60 * 60,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.isError) {
      navigate("/admin/logout");
    }

    if (query.data) {
      const data: userType = { ...user, access_token: query.data.access_token };
      localStorage.setItem("MISTERKONG_ADMIN", JSON.stringify(data));
      setUser(data);
    }
  }, [query.data, query.isError]);

  useEffect(() => {
    document.title = "Misterkong | Admin";
  });

  return (
    <>
      <div className="flex flex-col gap-5 min-h-screen relative lg:pl-64 font-roboto bg-gray-100">
        <Sidebar />
        <Navbar />
        <Suspense fallback={<TopBarProgress />}>
          <div className="flex-1 px-5">
            <Outlet />
          </div>
        </Suspense>
        <Footer />
      </div>
      <ToastContainer />
      <ScrollRestoration />
    </>
  );
};

export default Index;
