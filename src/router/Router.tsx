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
import SubKategoriSk from "../pages/SyaratKetentuan/SubKategori";
import DetailSk from "../pages/SyaratKetentuan/Detail";
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
import AdminSyaratKetentuan from "../pages/admin/syarat-ketentuan";
import TambahSyaratKetentuan from "../pages/admin/syarat-ketentuan/Tambah";
import EditSyaratKetentuan from "../pages/admin/syarat-ketentuan/Edit";
import AdminKebijakanPrivasi from "../pages/admin/kebijakan-privasi";
import TambahKebijakanPrivasi from "../pages/admin/kebijakan-privasi/Tambah";
import EditKebijakanPrivasi from "../pages/admin/kebijakan-privasi/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "tentang-kami", element: <Tentang /> },
      { path: "layanan", element: <Layanan /> },
      { path: "mitra-usaha", element: <MitraUsaha /> },
      { path: "mitra-driver", element: <MitraDriver /> },
      { path: "kebijakan-privasi", element: <KebijakanPrivasi /> },
      {
        path: "syarat-ketentuan",
        element: <SyaratKetentuan />,
        children: [
          { path: ":kategori", element: <SubKategoriSk /> },
          { path: ":kategori/:slug", element: <DetailSk /> },
        ],
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
      { index: true, element: <Dashboard /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/tambah", element: <Tambah /> },
      { path: "blog/:id/edit", element: <EditBlog /> },
      { path: "bantuan", element: <Bantuan /> },
      { path: "bantuan/tambah", element: <TambahBantuan /> },
      { path: "bantuan/:id/edit", element: <EditBantuan /> },
      { path: "kebijakan-privasi", element: <AdminKebijakanPrivasi /> },
      { path: "kebijakan-privasi/tambah", element: <TambahKebijakanPrivasi /> },
      { path: "kebijakan-privasi/:id/edit", element: <EditKebijakanPrivasi /> },
      { path: "syarat-ketentuan", element: <AdminSyaratKetentuan /> },
      { path: "syarat-ketentuan/tambah", element: <TambahSyaratKetentuan /> },
      { path: "syarat-ketentuan/:id/edit", element: <EditSyaratKetentuan /> },
    ],
  },
  { path: "/admin/login", element: <Login /> },
  { path: "/admin/logout", element: <Logout /> },
]);

export default router;
