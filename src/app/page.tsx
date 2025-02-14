import type { FC } from 'react';
import { env } from '@/env';
import { db } from '@/server/db';

import { HelloWorldLabel } from './_components/hello-world-label';

const Home: FC = async () => {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  console.log({ users });

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloWorldLabel />
          <p>ENV：{env.ENV}</p>
          <p>DEBUG：{env.DEBUG}</p>
          <br />
          {users.map((user) => (
            <div
              key={user.id}
              className="text-sm text-gray-500"
            >
              {user.name}: {user.email}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
