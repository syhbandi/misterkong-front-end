import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Tentang from "../pages/Tentang";
import Layanan from "../pages/Layanan";
import MitraUsaha from "../pages/MitraUsaha";
import MitraDriver from "../pages/MitraDriver";
import KebijakanPrivasi from "../pages/KebijakanPrivasi";

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
    ],
  },
]);

export default router;
