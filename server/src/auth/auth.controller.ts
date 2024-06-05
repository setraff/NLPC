import { Controller } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import contract from 'src/contract';

@Controller()
export class AuthController {
  @TsRestHandler(contract.auth)
  handler() {
    return tsRestHandler(contract.auth, {
      async createUser() {
        return {
          status: 201,
          body: null,
        };
      },
      async me() {
        return {
          status: 200,
          body: null,
        };
      },
    });
  }
}
