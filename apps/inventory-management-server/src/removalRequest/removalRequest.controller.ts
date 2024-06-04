import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RemovalRequestService } from "./removalRequest.service";
import { RemovalRequestControllerBase } from "./base/removalRequest.controller.base";

@swagger.ApiTags("removalRequests")
@common.Controller("removalRequests")
export class RemovalRequestController extends RemovalRequestControllerBase {
  constructor(
    protected readonly service: RemovalRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
