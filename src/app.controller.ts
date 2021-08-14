import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //공통주소
export class AppController {
  //컨트롤러는 res와 req에 대해 알고있다.
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  // //세부주소
  // @Get('user') //GET/abc/user
  // getUser(): string {
  //   return this.appService.getUser();
  // }

  // @Post('user') //Post/abc/hi
  // postUser(): string {
  //   return this.appService.postUser();
  // }
}
