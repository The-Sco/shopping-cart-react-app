import { Navigate } from "react-router";
import App from "./App";
import Homepage from "./components/Homepage";
import Shop from "./components/shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "shop",
        element: <Navigate to="all" />,
      },
    ],
  },
];
export default routes;
