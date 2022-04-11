import useAuth from "hook/use-auths";
import { Navigate } from "react-router";
import { PATH_DASHBOARD } from "routes/paths";

const GuestGuard: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} replace />;
  }

  return <>{children}</>;
};

export default GuestGuard;
