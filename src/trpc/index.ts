import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  antApiRouter: publicProcedure.query(() => {
    return "hello";
  }),
});

export type AppRouter = typeof appRouter;
