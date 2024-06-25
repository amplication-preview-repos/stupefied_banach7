import { Module } from "@nestjs/common";
import { DiscordModuleService } from "./discordmodule.service";
import { DiscordModuleController } from "./discordmodule.controller";
import { DiscordModuleResolver } from "./discordmodule.resolver";

@Module({
  controllers: [DiscordModuleController],
  providers: [DiscordModuleService, DiscordModuleResolver],
  exports: [DiscordModuleService],
})
export class DiscordModuleModule {}
