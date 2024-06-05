import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import errorResponseSchema from './utils/errorResponseSchema';

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
        400: errorResponseSchema,
      },
    },
    me: {
      method: 'GET',
      path: '/me',
      responses: {
        200: z.null(),
      },
    },
  },
  { pathPrefix: '/auth' },
);

const contract = c.router({
  auth: authContract,
});

export default contract;
