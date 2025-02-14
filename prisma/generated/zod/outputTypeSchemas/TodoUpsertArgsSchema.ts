import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputSchema } from '../inputTypeSchemas/TodoWhereUniqueInputSchema'
import { TodoCreateInputSchema } from '../inputTypeSchemas/TodoCreateInputSchema'
import { TodoUncheckedCreateInputSchema } from '../inputTypeSchemas/TodoUncheckedCreateInputSchema'
import { TodoUpdateInputSchema } from '../inputTypeSchemas/TodoUpdateInputSchema'
import { TodoUncheckedUpdateInputSchema } from '../inputTypeSchemas/TodoUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  completed: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const TodoUpsertArgsSchema: z.ZodType<Prisma.TodoUpsertArgs> = z.object({
  select: TodoSelectSchema.optional(),
  where: TodoWhereUniqueInputSchema,
  create: z.union([ TodoCreateInputSchema,TodoUncheckedCreateInputSchema ]),
  update: z.union([ TodoUpdateInputSchema,TodoUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.TodoUpsertArgs>;

export default TodoUpsertArgsSchema;
