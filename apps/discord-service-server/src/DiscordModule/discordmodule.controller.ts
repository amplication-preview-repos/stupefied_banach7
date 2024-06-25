import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DiscordModuleService } from "./discordmodule.service";

@swagger.ApiTags("discordModules")
@common.Controller("discordModules")
export class DiscordModuleController {
  constructor(protected readonly service: DiscordModuleService) {}
}
