declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    createTodo: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            username: string;
            userId: number;
            todo: string;
            description: unknown;
        };
        output: {
            id: string;
            username: string;
            status: string;
        };
        meta: object;
    }>;
    updateTodo: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            username: string;
            todo: string;
        };
        output: void;
        meta: object;
    }>;
}>>;
export type AppRouter = typeof appRouter;
export {};
//# sourceMappingURL=index.d.ts.map