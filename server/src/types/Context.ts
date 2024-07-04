import { createContext } from "../trpc/createContext";

export type Context = Awaited<ReturnType<typeof createContext>>;
