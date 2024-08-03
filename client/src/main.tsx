import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import Auth0Provider from "./contexts/Auth0Provider";
import TrpcAndQueryClientProviders from "./contexts/TrpcAndQueryClientProviders";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Auth0Provider>
          <TrpcAndQueryClientProviders>
            <RouterProvider router={router} />
          </TrpcAndQueryClientProviders>
        </Auth0Provider>
      </LocalizationProvider>
    </StrictMode>
  );
}
