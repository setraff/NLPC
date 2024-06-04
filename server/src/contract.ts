import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const authContract = c.router(
  {
    createAccount: {
      method: 'POST',
      path: '/create',
      summary: 'Create an account',
      body: z.object({
        email: z.string({ message: 'Must be a string' }).email('Invalid email'),
        password: z.string({ message: 'Must be a string' }),
      }),
      responses: {
        201: null,
        400: z.object({
          error: z.string(),
        }),
      },
    },
    login: {
      method: 'POST',
      path: '/login',
      summary: 'Log in',
      body: z.object({
        email: z.string({ message: 'Must be a string' }).email('Invalid email'),
        password: z.string({ message: 'Must be a string' }),
      }),
      responses: {
        200: null,
        400: z.object({
          error: z.string(),
        }),
      },
    },
  },
  {
    pathPrefix: '/auth',
  },
);

const contract = c.router({
  auth: authContract,
});

export default contract;
