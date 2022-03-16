import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

let MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [{}],
};


// ==============================|| ROUTING RENDER ||============================== //
export default   function ThemeRoutes() {
  let routes = useRoutes([MainRoutes,]);
  return routes;
}
