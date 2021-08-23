import {Injectable, Logger, NestMiddleware} from '@nestjs/common';
import {NextFunction, Response, Request} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    //디버그라는 패키지역할
    private logger = new Logger('HTTP');

    use(request: Request, response: Response, next: NextFunction): void {
        const {ip, method, originalUrl} = request;
        const userAgent = request.get('user-agent') || '';

        response.on('finish', () => {
            const {statusCode} = response;
            const contentLength = response.get('content-length');
            this.logger.log(
                //Logger.log
                `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
            );
        });

        next();
    }
}
