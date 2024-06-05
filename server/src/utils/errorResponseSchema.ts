import { z } from 'zod';

const errorResponseSchema = z.object({
  error: z.string(),
});

export default errorResponseSchema;
