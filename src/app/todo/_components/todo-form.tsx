'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addTodo } from '@/server/action/todo';
import { TodoCreateInputSchema } from 'prisma/generated/zod/inputTypeSchemas/TodoCreateInputSchema';
import { z } from 'zod';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const input = { title, completed: false };
      TodoCreateInputSchema.parse(input);
      await addTodo(input);
      setTitle('');
      setError(null);

      router.refresh();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0]?.message ?? '入力が無効です');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="新しいTodoを入力"
            className={`flex-grow rounded-l-lg bg-gray-100 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none ${error ? 'border-red-500' : ''}`}
          />
          <button
            type="submit"
            className="rounded-r-lg bg-blue-500 px-6 py-2 text-white transition duration-200 ease-in-out hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            追加
          </button>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </form>
  );
};
