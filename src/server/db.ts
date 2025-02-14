import { env } from '@/env';
import { PrismaClient } from '@prisma/client';

const createPrismaClient = () => {
  return new PrismaClient({
    log: env.ENV === 'dev' ? ['query', 'warn', 'error'] : ['error'],
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.ENV !== 'prod') globalForPrisma.prisma = db;
