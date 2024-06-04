import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const authContract = c.router(
  {
    createUser: {
      method: 'POST',
      path: '/user',
      body: z.object({
        email: z.string().email('Invalid email'),
        password: z.string(),
      }),
      responses: {
        201: z.null(),
        400: z.object({
          error: z.string(),
        }),
      },
    },
  },
  { pathPrefix: '/auth' },
);

const eventsContract = c.router(
  {
    createUser: {
      method: 'POST',
      path: '/user',
      body: z.object({
        email: z.string().email('Invalid email'),
        password: z.string(),
      }),
      responses: {
        201: z.null(),
        400: z.object({
          error: z.string(),
        }),
      },
    },
  },
  { pathPrefix: '/auth' },
);

const contract = c.router({
  auth: authContract,
});

export default contract;
