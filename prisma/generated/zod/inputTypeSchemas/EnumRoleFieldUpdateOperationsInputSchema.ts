import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict() as z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput>;

export default EnumRoleFieldUpdateOperationsInputSchema;
