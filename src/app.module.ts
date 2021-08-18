import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {LoggerMiddleware} from './middlewares/logger.middleware';
import {UsersModule} from './users/users.module';
import { DmsService } from './dms/dms.service';
import { DmsController } from './dms/dms.controller';
import { WorkspacesService } from './workspaces/workspaces.service';
import { WorkspacesController } from './workspaces/workspaces.controller';

@Module({
    imports: [ConfigModule.forRoot(), UsersModule],
    controllers: [AppController, DmsController, WorkspacesController],
    providers: [AppService, DmsService, WorkspacesService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
