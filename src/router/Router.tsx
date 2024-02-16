import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Tentang from "../pages/Tentang";
import Layanan from "../pages/Layanan";
import MitraUsaha from "../pages/MitraUsaha";
import MitraDriver from "../pages/MitraDriver";
import KebijakanPrivasi from "../pages/KebijakanPrivasi";
import SyaratKetentuan from "../pages/SyaratKetentuan";
import Admin from "../pages/admin";
import Dashboard from "../pages/admin/dashboard";
import Blog from "../pages/admin/blog";
import Login from "../pages/auth/Login";
import Tambah from "../pages/admin/blog/Tambah";
import Logout from "../pages/auth/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tentang-kami",
        element: <Tentang />,
      },
      {
        path: "layanan",
        element: <Layanan />,
      },
      {
        path: "mitra-usaha",
        element: <MitraUsaha />,
      },
      {
        path: "mitra-driver",
        element: <MitraDriver />,
      },
      {
        path: "kebijakan-privasi",
        element: <KebijakanPrivasi />,
      },
      {
        path: "syarat-ketentuan",
        element: <SyaratKetentuan />,
      },
      {
        path: "bantuan",
        element: "tes",
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/tambah",
        element: <Tambah />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/logout",
    element: <Logout />,
  },
]);

export default router;
