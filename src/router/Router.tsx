import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorPage from "../pages/ErrorPage";
import TopBarProgress from "react-topbar-progress-indicator";

// front office
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../pages/Home"));
const Tentang = lazy(() => import("../pages/Tentang"));
const Layanan = lazy(() => import("../pages/Layanan"));
const MitraUsaha = lazy(() => import("../pages/MitraUsaha"));
const MitraDriver = lazy(() => import("../pages/MitraDriver"));
const KebijakanPrivasi = lazy(() => import("../pages/KebijakanPrivasi"));
const SyaratKetentuan = lazy(() => import("../pages/SyaratKetentuan"));
const SubKategoriSk = lazy(
  () => import("../pages/SyaratKetentuan/SubKategori")
);
const DetailSk = lazy(() => import("../pages/SyaratKetentuan/Detail"));

// back office
const Admin = lazy(() => import("../pages/admin"));
const Dashboard = lazy(() => import("../pages/admin/dashboard"));
const Blog = lazy(() => import("../pages/admin/blog"));
const Login = lazy(() => import("../pages/auth/Login"));
const Tambah = lazy(() => import("../pages/admin/blog/Tambah"));
const EditBlog = lazy(() => import("../pages/admin/blog/Edit"));
const Logout = lazy(() => import("../pages/auth/Logout"));
const Bantuan = lazy(() => import("../pages/admin/bantuan"));
const TambahBantuan = lazy(() => import("../pages/admin/bantuan/Tambah"));
const EditBantuan = lazy(() => import("../pages/admin/bantuan/Edit"));
const BantuanFront = lazy(() => import("../pages/Bantuan"));
const SubKategori = lazy(() => import("../pages/Bantuan/SubKategori"));
const Detail = lazy(() => import("../pages/Bantuan/Detail"));
const AdminSyaratKetentuan = lazy(
  () => import("../pages/admin/syarat-ketentuan")
);
const TambahSyaratKetentuan = lazy(
  () => import("../pages/admin/syarat-ketentuan/Tambah")
);
const EditSyaratKetentuan = lazy(
  () => import("../pages/admin/syarat-ketentuan/Edit")
);
const AdminKebijakanPrivasi = lazy(
  () => import("../pages/admin/kebijakan-privasi")
);
const TambahKebijakanPrivasi = lazy(
  () => import("../pages/admin/kebijakan-privasi/Tambah")
);
const EditKebijakanPrivasi = lazy(
  () => import("../pages/admin/kebijakan-privasi/Edit")
);
const FrontBlog = lazy(() => import("../pages/Blog"));
const FrontBlogDetail = lazy(() => import("../pages/Blog/Detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, path: "/" },
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
      { path: "blog", element: <FrontBlog /> },
      { path: "blog/:slug", element: <FrontBlogDetail /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Admin />
      </Suspense>
    ),
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
  {
    path: "/admin/login",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/admin/logout",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Logout />
      </Suspense>
    ),
  },
]);

export default router;
