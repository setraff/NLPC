import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import errorResponseSchema from './utils/errorResponseSchema';

const contract = initContract();

const authContract = contract.router(
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

const c = contract.router({
  auth: authContract,
});

export default c;
