'use server';

import type TodoCreateInputSchema from 'prisma/generated/zod/inputTypeSchemas/TodoCreateInputSchema';
import type TodoUpdateInputSchema from 'prisma/generated/zod/inputTypeSchemas/TodoUpdateInputSchema';
import type { Todo } from 'prisma/generated/zod/modelSchema/TodoSchema';
import { revalidatePath } from 'next/cache';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/server/data-access-layer/todo';
import { z } from 'zod';

type TodoCreateInput = z.infer<typeof TodoCreateInputSchema>;
type TodoUpdateInput = z.infer<typeof TodoUpdateInputSchema>;
type ActionResponse<T = void> = {
  success: boolean;
  data?: T;
  error?: string;
  statusCode?: number;
};

const handleError = <T>(error: unknown, action: string): ActionResponse<T> => {
  if (error instanceof z.ZodError) {
    return {
      success: false,
      error: `バリデーションエラー: ${error.errors.map((err) => err.message).join(', ')}`,
      statusCode: 400,
    };
  }
  if (error instanceof Error) {
    return {
      success: false,
      error: `${action}処理でエラーが発生しました: ${error.message}`,
      statusCode: 500,
    };
  }
  return {
    success: false,
    error: '予期しないエラーが発生しました',
    statusCode: 500,
  };
};

export const fetchTodos = async (): Promise<ActionResponse<Todo[]>> => {
  try {
    const todos = await getTodos();
    return { success: true, data: todos };
  } catch (error) {
    return handleError(error, '取得');
  }
};

export const addTodo = async (data: TodoCreateInput): Promise<ActionResponse<Todo>> => {
  try {
    const newTodo = await createTodo(data);
    revalidatePath('/todo');
    return { success: true, data: newTodo };
  } catch (error) {
    return handleError(error, '作成');
  }
};

export const toggleTodoCompletion = async (id: number, data: TodoUpdateInput): Promise<ActionResponse<Todo>> => {
  try {
    const updatedTodo = await updateTodo(id, data);
    revalidatePath('/todo');
    return { success: true, data: updatedTodo };
  } catch (error) {
    return handleError(error, '更新');
  }
};

export const removeTodo = async (id: number): Promise<ActionResponse> => {
  try {
    await deleteTodo(id);
    revalidatePath('/todo');
    return { success: true };
  } catch (error) {
    return handleError(error, '作成');
  }
};
