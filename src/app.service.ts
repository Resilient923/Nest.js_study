import {Injectable} from '@nestjs/common';
import {UsersService} from './users/users.service';

//요청, 응답에 대해서는 모른다.
@Injectable()
export class AppService {
    constructor(private userService: UsersService) {}
    async getHello() {
        // this.userService.getUser();
        // this.getWow();
        return process.env.SECRET;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async getWow() {}
}
