import { createTRPCClient, httpBatchLink } from '@trpc/client';
//     👆 **type-only** imports are stripped at build time
// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
        }),
    ],
});
//# sourceMappingURL=index.js.map