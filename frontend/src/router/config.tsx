import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Landing from "../pages/landing/page";
import Login from "../pages/login/page";
import Dashboard from "../pages/dashboard/page";
import GerarApostas from "../pages/gerar-apostas/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/gerar-apostas",
    element: <GerarApostas />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
