import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FerService } from "./fer.service";
import { FerControllerBase } from "./base/fer.controller.base";

@swagger.ApiTags("fers")
@common.Controller("fers")
export class FerController extends FerControllerBase {
  constructor(
    protected readonly service: FerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
