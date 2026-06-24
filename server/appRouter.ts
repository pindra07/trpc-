import { publicProcedure, router } from './trpc';
import {z} from "zod"

const todoInputType = z.object({
  title: z.string(),
  description: z.string()
})

 
export const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts) => {
      const title = opts.input.title
      const description = opts.input.description

      // database calls to mutate the data on the db

      return {
        id:  "1",
        title: "be the best engineer",
        description: "work hard to be the best engineer"
      }
    })
});
 
export type AppRouter = typeof appRouter;
