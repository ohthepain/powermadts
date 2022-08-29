// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { prisma } from "../../../backend/db/client";
import { appRouter } from "../../../backend/router";
import { createContext } from "../../../backend/router/context";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  teardown: () => prisma.$disconnect(),
});
