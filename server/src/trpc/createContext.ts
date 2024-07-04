import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  const authorization = req.headers.authorization;
  const accessToken = authorization?.replace("Bearer ", "");
  return {
    accessToken,
  };
};
