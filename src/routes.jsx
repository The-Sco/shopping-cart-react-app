import { Navigate } from "react-router";
import App from "./App";
import Homepage from "./components/Homepage";

const routes = [
  {
    path: "/",
    element: <App />, // Твой главный компонент с <Outlet />
    children: [
      {
        // Когда путь точно "/", рендерим этот "пустой" маршрут
        index: true,
        // Navigate автоматически перекинет браузер на /homepage
        element: <Navigate to="/homepage" replace />,
      },
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <App />,
      },
    ],
  },
];
export default routes;
