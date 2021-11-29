import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class JoinRequestDto {
    @IsEmail()
    @ApiProperty({
        example: 'skc@gmail.com',
        description: '이메일',
        required: true,
    })
    public email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'skc',
        description: '닉네임',
    })
    public nickname: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'nodejsbook',
        description: '비밀번호',
    })
    public password: string;
    //squash test를 위한 주석처리1
    //squash test를 위한 주석처리2
}
