import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'

export const TodoDeleteManyArgsSchema: z.ZodType<Prisma.TodoDeleteManyArgs> = z.object({
  where: TodoWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodoDeleteManyArgs>;

export default TodoDeleteManyArgsSchema;
