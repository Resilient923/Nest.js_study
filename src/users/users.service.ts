/* eslint-disable @typescript-eslint/no-empty-function */
import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
    postUsers(email: string, nickname: string, password: string) {}
}
