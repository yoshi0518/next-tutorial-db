import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateManyInputSchema } from '../inputTypeSchemas/TodoCreateManyInputSchema'

export const TodoCreateManyArgsSchema: z.ZodType<Prisma.TodoCreateManyArgs> = z.object({
  data: z.union([ TodoCreateManyInputSchema,TodoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TodoCreateManyArgs>;

export default TodoCreateManyArgsSchema;
