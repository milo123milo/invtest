import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RemovalRequestServiceBase } from "./base/removalRequest.service.base";

@Injectable()
export class RemovalRequestService extends RemovalRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
