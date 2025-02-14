import 'server-only';

import type { Todo } from '@prisma/client';
import { db } from '@/server/db';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

const createTodoDTO = (input: Todo): Todo => {
  return {
    id: input.id,
    title: input.title,
    completed: input.completed,
    createdAt: input.createdAt,
    updatedAt: input.updatedAt,
  };
};

const handleDatabaseError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    throw new Error(`Zodのバリデーションエラー: ${error.errors.map((e) => e.message).join(', ')}`);
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(`Prismaの既知のエラー: ${error.message}`);
  }
  throw new Error(`その他のエラー: ${error instanceof Error ? error.message : String(error)}`);
};

export const getTodos = async () => {
  try {
    const todos = await db.todo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return todos.map((todo) => createTodoDTO(todo));
  } catch (error) {
    handleDatabaseError(error);
  }
};

export const createTodo = async (data: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const todo = await db.todo.create({
      data,
    });

    return createTodoDTO(todo);
  } catch (error) {
    handleDatabaseError(error);
  }
};

export const updateTodo = async (id: number, data: Partial<Omit<Todo, 'createdAt' | 'updatedAt'>>) => {
  try {
    const todo = await db.todo.update({
      where: { id },
      data,
    });

    return createTodoDTO(todo);
  } catch (error) {
    handleDatabaseError(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await db.todo.delete({
      where: { id },
    });
  } catch (error) {
    handleDatabaseError(error);
  }
};
