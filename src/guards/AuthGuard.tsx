import useAuth from "hook/use-auths";
import Login from "pages/auth/Login";
import { useState } from "react";
import { Navigate, useLocation } from "react-router";
import { PATH_AUTH } from "routes/paths";

const AuthGuard: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      console.log(
        "NOT AUTHEN: pathname != requestionLocation",
        pathname,
        requestedLocation
      );
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    console.log(
      "AUTHEN: pathname != requestionLocation",
      pathname,
      requestedLocation
    );
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
