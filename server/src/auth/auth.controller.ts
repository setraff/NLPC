import { Controller, Post } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import c from 'src/contract';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller()
export class AuthController {
  constructor(private prismaService: PrismaService) {}

  @TsRestHandler(c.auth.me)
  async getMe() {
    return tsRestHandler(c.auth.me, async () => {
      return { status: 200, body: null };
    });
  }
}
