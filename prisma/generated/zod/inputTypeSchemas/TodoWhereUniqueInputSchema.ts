import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TodoWhereInputSchema } from './TodoWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TodoWhereUniqueInputSchema: z.ZodType<Prisma.TodoWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TodoWhereInputSchema),z.lazy(() => TodoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodoWhereInputSchema),z.lazy(() => TodoWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string().max(10, {message: "タイトルは10文字以内で入力してください"}) ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict()) as z.ZodType<Prisma.TodoWhereUniqueInput>;

export default TodoWhereUniqueInputSchema;
