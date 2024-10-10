import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
