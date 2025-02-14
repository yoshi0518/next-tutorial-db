import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TodoSumOrderByAggregateInputSchema: z.ZodType<Prisma.TodoSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TodoSumOrderByAggregateInput>;

export default TodoSumOrderByAggregateInputSchema;
