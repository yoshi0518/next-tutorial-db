import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'
import { TodoOrderByWithRelationInputSchema } from '../inputTypeSchemas/TodoOrderByWithRelationInputSchema'
import { TodoWhereUniqueInputSchema } from '../inputTypeSchemas/TodoWhereUniqueInputSchema'

export const TodoAggregateArgsSchema: z.ZodType<Prisma.TodoAggregateArgs> = z.object({
  where: TodoWhereInputSchema.optional(),
  orderBy: z.union([ TodoOrderByWithRelationInputSchema.array(),TodoOrderByWithRelationInputSchema ]).optional(),
  cursor: TodoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodoAggregateArgs>;

export default TodoAggregateArgsSchema;
