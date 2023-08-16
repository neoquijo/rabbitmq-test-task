import { Module } from "@nestjs/common";
import { LooggerModule } from "shared/Logger/logger.module";
import { LoggerService } from "shared/Logger/logger.service";

@Module({
    imports: [LooggerModule],
    providers: [LoggerService]
})
export class TasksModule {

}