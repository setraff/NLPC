import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import errorResponseSchema from './utils/errorResponseSchema';

const c = initContract();

const authContract = c.router(
  {
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
