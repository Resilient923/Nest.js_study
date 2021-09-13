import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {LoggerMiddleware} from './middlewares/logger.middleware';
import {UsersModule} from './users/users.module';
import {DmsService} from './dms/dms.service';
import {DmsController} from './dms/dms.controller';
import {WorkspacesService} from './workspaces/workspaces.service';
import {WorkspacesController} from './workspaces/workspaces.controller';
import {WorkspaceModule} from './workspaces/workspace.module';
import {DmsModule} from './dms/dms.module';
import {UsersService} from './users/users.service';
// import {UsersServiceㅎ} from './users/users.service';
// import {channelsModule} from './ch'

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        WorkspaceModule,
        // ChanneslModule,
        DmsModule,
        UsersModule,
        // ChannelsModule
    ],
    controllers: [AppController, DmsController, WorkspacesController],
    providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
