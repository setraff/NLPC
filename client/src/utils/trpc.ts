import { createTRPCReact } from "@trpc/react-query";
import AppRouter from "../types/AppRouter";

//@ts-ignore
export const trpc = createTRPCReact<AppRouter>();
