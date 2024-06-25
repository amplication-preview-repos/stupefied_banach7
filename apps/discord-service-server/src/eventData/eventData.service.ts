import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventDataServiceBase } from "./base/eventData.service.base";

@Injectable()
export class EventDataService extends EventDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
