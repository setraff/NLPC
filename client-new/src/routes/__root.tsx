import { useAuth0 } from "@auth0/auth0-react";
import {
  createRootRoute,
  Link,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: () => {
    const auth0 = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
      if (auth0.isAuthenticated) {
        navigate({
          to: "/calendar",
        });
      } else if (!auth0.isLoading) {
        auth0.loginWithRedirect();
      }
    }, [auth0.isAuthenticated, auth0.isLoading]);

    return (
      <div className="w-screen h-screen overflow-x-hidden bg-gray-200 desktop:p-5">
        <Outlet />
      </div>
    );
  },
});
