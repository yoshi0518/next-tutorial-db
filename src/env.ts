import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    ENV: z.enum(['prod', 'dev']).default('dev'),
    DEBUG: z.string().default('true'),
  },
  client: {
    // NEXT_PUBLIC_xxxxx: z.string(),
  },
  runtimeEnv: {
    ENV: process.env.ENV,
    DEBUG: process.env.DEBUG,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
