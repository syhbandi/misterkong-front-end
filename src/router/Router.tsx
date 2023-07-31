import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../pages/Posts/Posts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

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
        path: "blog",
        element: <Posts />,
      },
    ],
  },
]);

export default router;
