import { Controller } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import contract from 'src/contract';

@Controller()
export class AuthController {
  @TsRestHandler(contract.auth.createUser)
  createUser() {
    return tsRestHandler(contract.auth.createUser, async () => {
      return {
        status: 201,
        body: null,
      };
    });
  }
}
