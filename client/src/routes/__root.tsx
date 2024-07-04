import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="min-h-screen w-screen bg-gray-200 flex flex-col items-center space-y-5 desktop:p-5 p-2">
        <Outlet />
      </div>
    );
  },
});
