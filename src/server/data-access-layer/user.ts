import 'server-only';

import type { User } from '@prisma/client';
import { db } from '@/server/db';

const createUsersDTO = (userData: User) => {
  const { id, email, name } = userData;
  return {
    id,
    email,
    name,
  };
};

export const getUsers = async () => {
  const users = await db.user.findMany();
  return users.map((user) => createUsersDTO(user));
};
