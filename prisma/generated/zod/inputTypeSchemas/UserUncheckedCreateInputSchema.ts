import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional()
}).strict() as z.ZodType<Prisma.UserUncheckedCreateInput>;

export default UserUncheckedCreateInputSchema;
