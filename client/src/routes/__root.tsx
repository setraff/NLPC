import { useAuth0 } from "@auth0/auth0-react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const auth0 = useAuth0();

  useEffect(() => {
    if (!auth0.isAuthenticated && !auth0.isLoading) {
      auth0.loginWithRedirect();
    }
  }, [auth0.isAuthenticated, auth0.isLoading]);

  if (!auth0.isAuthenticated) {
    return;
  }

  return <Outlet />;
}
