import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FerResolverBase } from "./base/fer.resolver.base";
import { Fer } from "./base/Fer";
import { FerService } from "./fer.service";

@graphql.Resolver(() => Fer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FerResolver extends FerResolverBase {
  constructor(
    protected readonly service: FerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
