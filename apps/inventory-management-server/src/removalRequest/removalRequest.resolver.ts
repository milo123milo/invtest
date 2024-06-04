import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RemovalRequestResolverBase } from "./base/removalRequest.resolver.base";
import { RemovalRequest } from "./base/RemovalRequest";
import { RemovalRequestService } from "./removalRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RemovalRequest)
export class RemovalRequestResolver extends RemovalRequestResolverBase {
  constructor(
    protected readonly service: RemovalRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
