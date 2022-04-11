import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import MainLayout from "layout/MainLayout";
import Login from "pages/Login";
import Test from "pages/test";
import { RouteObject, useRoutes } from "react-router-dom";

let MainRoutes: RouteObject = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      element: <div>this is a dashboard</div>,
      path: "/dashboard/default",
    },
    {
      element: <div>this is a Report 1</div>,
      path: "/report/r1",
    },
    {
      element: <div>this is a Report 2</div>,
      path: "/report/r2",
    },
    {
      element: <div>this is a Report 3 - 1</div>,
      path: "report/report-type/r31",
    },
    {
      element: <div>this is a Report 3 - 2</div>,
      path: "/report/report-type/r32",
    },
    {
      element: <Test />,
      path: "/test",
    },
    {
      element: <h1>404</h1>,
      path: "*",
    },
  ],
};

let AuthRoutes: RouteObject = {
  path: "/login",
  element: (
    <GuestGuard>
      <Login />
    </GuestGuard>
  ),
};
// ==============================|| ROUTING RENDER ||============================== //
export default function ThemeRoutes() {
  let routes = useRoutes([MainRoutes, AuthRoutes]);
  return routes;
}
