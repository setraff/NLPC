import { Controller } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import contract from 'src/contract';

@Controller()
export class AuthController {
  @TsRestHandler(contract.auth)
  handler() {
    return tsRestHandler(contract.auth, {
      async me() {
        return {
          status: 200,
          body: null,
        };
      },
    });
  }
}
