import { initTRPC } from "@trpc/server";
import { Context } from "../types/Context";

const t = initTRPC.context<Context>().create();
export default t;
