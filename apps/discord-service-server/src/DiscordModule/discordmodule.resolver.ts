import * as graphql from "@nestjs/graphql";
import { DiscordModuleService } from "./discordmodule.service";

export class DiscordModuleResolver {
  constructor(protected readonly service: DiscordModuleService) {}
}
