// src/backend/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { myRouter } from "./router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", myRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
