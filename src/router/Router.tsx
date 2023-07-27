import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../pages/Posts/Posts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
