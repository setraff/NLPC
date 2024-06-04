import { Controller } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import contract from 'src/contract';

@Controller('auth')
export class AuthController {
  @TsRestHandler(contract.auth)
  handler() {
    return tsRestHandler(contract.auth, {
      login: ({ body }) => {
        return {
          status: 200,
        };
      },
    });
  }
}
