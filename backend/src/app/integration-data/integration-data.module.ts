import { HttpModule, Module } from "@nestjs/common";
import { IntegrationDataController } from "./integration-data.controller";
import { IntegrationDataService } from "./integration-data.service";

@Module({
    imports:[HttpModule],
    controllers: [IntegrationDataController],
    providers: [IntegrationDataService]
})
export class TokenModule {}