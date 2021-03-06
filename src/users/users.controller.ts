import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {JoinRequestDto} from './dto/join.request.dto';
import {UsersService} from './users.service';

@Controller('api/users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @ApiOperation({summary: '내 정보 조회'})
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @ApiOperation({summary: '회원가입'})
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password);
        console.log(data);
    }

    @ApiOperation({summary: '로그인'})
    @Post('login')
    logIn(@Req() req) {
        return req.user;
    }

    @ApiOperation({summary: '로그아웃'})
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('logoutOk!');
    }
}
