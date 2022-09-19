import { Module } from "@nestjs/common";
import { FerModuleBase } from "./base/fer.module.base";
import { FerService } from "./fer.service";
import { FerController } from "./fer.controller";
import { FerResolver } from "./fer.resolver";

@Module({
  imports: [FerModuleBase],
  controllers: [FerController],
  providers: [FerService, FerResolver],
  exports: [FerService],
})
export class FerModule {}
