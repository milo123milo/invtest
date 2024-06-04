import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RemovalRequestModuleBase } from "./base/removalRequest.module.base";
import { RemovalRequestService } from "./removalRequest.service";
import { RemovalRequestController } from "./removalRequest.controller";
import { RemovalRequestResolver } from "./removalRequest.resolver";

@Module({
  imports: [RemovalRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [RemovalRequestController],
  providers: [RemovalRequestService, RemovalRequestResolver],
  exports: [RemovalRequestService],
})
export class RemovalRequestModule {}
