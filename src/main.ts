import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import passport from 'passport';
import cookieParser from 'cookie-parser';
// import session from 'express-session';
import path from 'path';
import {ValidationPipe} from '@nestjs/common';

import {AppModule} from './app.module';
import {HttpExceptionFilter} from './http-exception.filter';
declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    app.enableCors({
        origin: true,
        credentials: true,
    });
    // app.useStaticAssets(
    //     process.env.NODE_ENV === 'production'
    //         ? path.join(__dirname, '..', '..', 'uploads')
    //         : path.join(__dirname, '..', 'uploads'),
    //     {
    //         prefix: '/uploads',
    //     },
    // );
    // app.useStaticAssets(
    //     process.env.NODE_ENV === 'production'
    //         ? path.join(__dirname, '..', '..', 'public')
    //         : path.join(__dirname, '..', 'public'),
    //     {
    //         prefix: '/dist',
    //     },
    // );
    const config = new DocumentBuilder()
        .setTitle('Sleact API')
        .setDescription('Sleact 개발을 위한 API 문서입니다.')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('aapi', app, document);

    app.use(cookieParser());
    // app.use(
    //     session({
    //         resave: false,
    //         saveUninitialized: false,
    //         secret: process.env.COOKIE_SECRET,
    //         cookie: {
    //             httpOnly: true,
    //         },
    //     }),
    // );
    app.use(passport.initialize());
    // app.use(passport.session());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`listening on port ${port}`);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
