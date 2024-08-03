import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { trpc } from "../utils/trpc";
import { httpBatchLink } from "@trpc/client";
import { useAuth0 } from "@auth0/auth0-react";

interface ITrpcAndQueryClientProviders {
  children: React.ReactNode;
}

const TrpcAndQueryClientProviders: React.FC<ITrpcAndQueryClientProviders> = (
  p
) => {
  const auth0 = useAuth0();
  const queryClient = new QueryClient();

  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3001/trpc",
        async headers() {
          const accessToken = await auth0.getAccessTokenSilently();
          console.log(accessToken);
          return {
            authorization: `Bearer ${accessToken}`,
          };
        },
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {p.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcAndQueryClientProviders;
