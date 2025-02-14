import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TodoUncheckedCreateInputSchema: z.ZodType<Prisma.TodoUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().max(10, {message: "タイトルは10文字以内で入力してください"}),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TodoUncheckedCreateInput>;

export default TodoUncheckedCreateInputSchema;
