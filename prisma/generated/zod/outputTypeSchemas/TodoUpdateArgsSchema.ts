import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoUpdateInputSchema } from '../inputTypeSchemas/TodoUpdateInputSchema'
import { TodoUncheckedUpdateInputSchema } from '../inputTypeSchemas/TodoUncheckedUpdateInputSchema'
import { TodoWhereUniqueInputSchema } from '../inputTypeSchemas/TodoWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  completed: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const TodoUpdateArgsSchema: z.ZodType<Prisma.TodoUpdateArgs> = z.object({
  select: TodoSelectSchema.optional(),
  data: z.union([ TodoUpdateInputSchema,TodoUncheckedUpdateInputSchema ]),
  where: TodoWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodoUpdateArgs>;

export default TodoUpdateArgsSchema;
