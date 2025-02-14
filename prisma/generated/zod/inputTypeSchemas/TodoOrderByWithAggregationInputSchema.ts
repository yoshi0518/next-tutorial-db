import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TodoCountOrderByAggregateInputSchema } from './TodoCountOrderByAggregateInputSchema';
import { TodoAvgOrderByAggregateInputSchema } from './TodoAvgOrderByAggregateInputSchema';
import { TodoMaxOrderByAggregateInputSchema } from './TodoMaxOrderByAggregateInputSchema';
import { TodoMinOrderByAggregateInputSchema } from './TodoMinOrderByAggregateInputSchema';
import { TodoSumOrderByAggregateInputSchema } from './TodoSumOrderByAggregateInputSchema';

export const TodoOrderByWithAggregationInputSchema: z.ZodType<Prisma.TodoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TodoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TodoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TodoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TodoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TodoSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.TodoOrderByWithAggregationInput>;

export default TodoOrderByWithAggregationInputSchema;
