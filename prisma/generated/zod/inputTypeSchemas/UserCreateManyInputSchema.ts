import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateManyInput>;

export default UserCreateManyInputSchema;
