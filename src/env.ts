import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  clientPrefix: 'VITE_',
  client: {
    VITE_STRIPE_PUBLIC_KEY: z.string(),
    VITE_STRIPE_SECRET_KEY: z.string(),
  },
  runtimeEnv: import.meta.env,
});