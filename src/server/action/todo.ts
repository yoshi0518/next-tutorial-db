'use server';

import type { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/server/data-access-layer/todo';

type ActionResponse<T = void> = {
  success: boolean;
  data?: T;
  error?: string;
  statusCode?: number;
};

const handleError = <T>(error: unknown, action: string): ActionResponse<T> => {
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

export const addTodo = async (data: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>): Promise<ActionResponse<Todo>> => {
  try {
    const newTodo = await createTodo(data);
    revalidatePath('/todo');
    return { success: true, data: newTodo };
  } catch (error) {
    return handleError(error, '作成');
  }
};

export const toggleTodoCompletion = async (
  id: number,
  data: Partial<Omit<Todo, 'createdAt' | 'updatedAt'>>,
): Promise<ActionResponse<Todo>> => {
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
