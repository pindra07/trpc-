import { createTRPCClient, httpBatchLink } from "@trpc/client";
const trpc = createTRPCClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000'
        })
    ]
});
console.log("hello world");
//# sourceMappingURL=index.js.map