import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventDataModuleBase } from "./base/eventData.module.base";
import { EventDataService } from "./eventData.service";
import { EventDataController } from "./eventData.controller";
import { EventDataResolver } from "./eventData.resolver";

@Module({
  imports: [EventDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventDataController],
  providers: [EventDataService, EventDataResolver],
  exports: [EventDataService],
})
export class EventDataModule {}
