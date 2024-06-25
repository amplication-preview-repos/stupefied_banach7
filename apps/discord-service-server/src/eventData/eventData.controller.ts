import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventDataService } from "./eventData.service";
import { EventDataControllerBase } from "./base/eventData.controller.base";

@swagger.ApiTags("eventData")
@common.Controller("eventData")
export class EventDataController extends EventDataControllerBase {
  constructor(
    protected readonly service: EventDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
