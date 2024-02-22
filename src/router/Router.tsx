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
import EditBlog from "../pages/admin/blog/Edit";
import Logout from "../pages/auth/Logout";
import Bantuan from "../pages/admin/bantuan";
import TambahBantuan from "../pages/admin/bantuan/Tambah";
import EditBantuan from "../pages/admin/bantuan/Edit";
import BantuanFront from "../pages/Bantuan";
import SubKategori from "../pages/Bantuan/SubKategori";
import Detail from "../pages/Bantuan/Detail";

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
        element: <BantuanFront />,
        children: [
          { path: ":kategori", element: <SubKategori /> },
          { path: ":kategori/:slug", element: <Detail /> },
        ],
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
      { path: "blog/:id/edit", element: <EditBlog /> },
      { path: "bantuan", element: <Bantuan /> },
      { path: "bantuan/tambah", element: <TambahBantuan /> },
      { path: "bantuan/:id/edit", element: <EditBantuan /> },
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
