import { publicProcedure, router } from "./trpc.js";
import * as z from "zod"
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
    createTodo: publicProcedure // procedure 1
    .input(z.object({
        username: z.string(), 
        userId: z.number(),
        todo: z.string(),
        description: z.string()
    }))
    .mutation((opts) => {
        const username = opts.input.username
        const userId = opts.input.userId
        const todo = opts.input.todo
        const description = opts.input.description
        // Database Calls to find the data (like todos of specific user in this case and return to user)
        return {
            id: "1",
            username: username,
            status: "done"
        }
    }),

    signUp: publicProcedure
    .input(z.object({
        username: z.string(),
        password: z.string()
    }))
    .mutation(async (opts) => {
        let username = opts.input.username
        let password = opts.input.password 

        // context
        const usernameHeader = opts.ctx.username

        // do Database calls here to insert username and password
        // Do JWT tokenization here...

        let token = "234343"
        return {
            token,
            usernameHeader
        }
    }),

    updateTodo: publicProcedure // procedure 2
    .input(z.object({
        username: z.string(),
        todo: z.string(),
    }))
    .mutation(async (opts) => {
        const title = opts.input.username
        const todo = opts.input.todo
        // Database call to mutate data (in this case update the todo of the user)
    })
})

// serving the router
const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        // You should do all the headers operations here...
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader)
        // jwt.verify()
        return {
            username: "123"
        }
    }
  });
  server.listen(3000);


export type AppRouter = typeof appRouter;

// TASKS 
// Create a Todo (completed)
// Update a Todo (completed)
// serving router (completed)
// Calling from client (client can be node.js, next, react, etc....) (completed)


// context in trpc (completed)
// middlewares in trpc 
// authentication in trpc (completed)

