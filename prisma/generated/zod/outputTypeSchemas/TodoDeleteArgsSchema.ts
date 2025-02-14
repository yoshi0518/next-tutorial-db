import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const TodoDeleteArgsSchema: z.ZodType<Prisma.TodoDeleteArgs> = z.object({
  select: TodoSelectSchema.optional(),
  where: TodoWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodoDeleteArgs>;

export default TodoDeleteArgsSchema;
