import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  return {
    auth0UserId: 0,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
