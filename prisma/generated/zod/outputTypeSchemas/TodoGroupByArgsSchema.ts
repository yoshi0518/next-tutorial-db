import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'
import { TodoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TodoOrderByWithAggregationInputSchema'
import { TodoScalarFieldEnumSchema } from '../inputTypeSchemas/TodoScalarFieldEnumSchema'
import { TodoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TodoScalarWhereWithAggregatesInputSchema'

export const TodoGroupByArgsSchema: z.ZodType<Prisma.TodoGroupByArgs> = z.object({
  where: TodoWhereInputSchema.optional(),
  orderBy: z.union([ TodoOrderByWithAggregationInputSchema.array(),TodoOrderByWithAggregationInputSchema ]).optional(),
  by: TodoScalarFieldEnumSchema.array(),
  having: TodoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodoGroupByArgs>;

export default TodoGroupByArgsSchema;
