import { initTRPC } from "@trpc/server";

// Context of the request that will come from client (what context will be passed defined on client also)
const t = initTRPC.context<{
    username?: string
}>().create();

export const router =  t.router;
export const publicProcedure = t.procedure;

