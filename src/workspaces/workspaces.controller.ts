import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class WorkspacesController {
    @Get('name/chats')
    getChat(@Query() query, @Param() param) {
        console.log(query.perpage, query.page);
        console.log(param.id, param.url);
    }

    @Post(':name/chats')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    postChat(@Body() body) {}
}
