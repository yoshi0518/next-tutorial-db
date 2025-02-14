import { z } from 'zod';

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  title: z.string().max(10, { message: 'タイトルは10文字以内で入力してください' }),
  completed: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Todo = z.infer<typeof TodoSchema>;

export default TodoSchema;
