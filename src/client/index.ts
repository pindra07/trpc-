import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index.js"

const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
            async headers() {
                return {
                    Authorization: "Bearer 123432" // "Bearer "
                }
            }
        })
    ]
})

async function signUp() {
    let response = await trpc.signUp.mutate({
        username: "hello world",
        password: "password@123"
    })

    console.log(response)
}

async function createTodo() {
    let response = await trpc.createTodo.mutate({
        username: "Priyanshu",
        userId: 234,
        todo: "Hit the Gym",
        description: "do gym daily... "
    })
    console.log(response)
}

signUp()
createTodo()
