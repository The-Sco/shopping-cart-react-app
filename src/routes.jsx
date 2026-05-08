import { Navigate } from "react-router";
import App from "./App";
import Homepage from "./components/homepage/Homepage";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
export default routes;
