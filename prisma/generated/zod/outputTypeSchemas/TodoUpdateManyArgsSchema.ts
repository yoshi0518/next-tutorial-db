import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoUpdateManyMutationInputSchema } from '../inputTypeSchemas/TodoUpdateManyMutationInputSchema'
import { TodoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TodoUncheckedUpdateManyInputSchema'
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'

export const TodoUpdateManyArgsSchema: z.ZodType<Prisma.TodoUpdateManyArgs> = z.object({
  data: z.union([ TodoUpdateManyMutationInputSchema,TodoUncheckedUpdateManyInputSchema ]),
  where: TodoWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodoUpdateManyArgs>;

export default TodoUpdateManyArgsSchema;
