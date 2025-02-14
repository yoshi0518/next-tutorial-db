import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateInput>;

export default UserCreateInputSchema;
