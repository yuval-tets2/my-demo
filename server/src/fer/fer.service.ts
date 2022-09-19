import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FerServiceBase } from "./base/fer.service.base";

@Injectable()
export class FerService extends FerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
