import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TodoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TodoAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TodoAvgOrderByAggregateInput>;

export default TodoAvgOrderByAggregateInputSchema;
