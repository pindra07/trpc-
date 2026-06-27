export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    createTodo: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            title: string;
            description: string;
        };
        output: {
            id: string;
            title: string;
            description: string;
        };
        meta: object;
    }>;
}>>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=appRouter.d.ts.map