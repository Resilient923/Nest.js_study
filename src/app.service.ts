import {Injectable} from '@nestjs/common';

//요청, 응답에 대해서는 모른다.
@Injectable()
export class AppService {
    async getHello() {
        return process.env.SECRET;
    }
}
