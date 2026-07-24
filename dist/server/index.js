import { publicProcedure, router } from "./trpc.js";
import * as z from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';
const appRouter = router({
    createTodo: publicProcedure // procedure 1
        .input(z.object({
        username: z.string(),
        userId: z.number(),
        todo: z.string(),
        description: z.string
    }))
        .mutation((opts) => {
        const username = opts.input.username;
        const userId = opts.input.userId;
        const todo = opts.input.todo;
        const description = opts.input.description;
        // Database Calls to find the data (like todos of specific user in this case and return to user)
        return {
            id: "1",
            username: username,
            status: "done"
        };
    }),
    updateTodo: publicProcedure // procedure 2
        .input(z.object({
        username: z.string(),
        todo: z.string(),
    }))
        .mutation(async (opts) => {
        const title = opts.input.username;
        const todo = opts.input.todo;
        // Database call to mutate data (in this case update the todo of the user)
    })
});
// serving the router
const server = createHTTPServer({
    router: appRouter,
});
server.listen(3000);
// TASKS 
// Create a Todo (completed)
// Update a Todo (completed)
// authentication in trpc
// serving router (completed)
// Calling from client... (client can be node.js, next, react, etc....)
//# sourceMappingURL=index.js.map