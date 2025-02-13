import type { FC } from 'react';
import { env } from '@/env';

import { HelloWorldLabel } from './_components/hello-world-label';

const Home: FC = () => {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloWorldLabel />
          <p>ENV：{env.ENV}</p>
          <p>DEBUG：{env.DEBUG}</p>
        </div>
      </div>
    </main>
  );
};
export default Home;
