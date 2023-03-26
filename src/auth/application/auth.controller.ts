import {
    BadRequestException,
    Body,
    Controller, HttpCode,
    Post,
    Req,
    UnauthorizedException
} from '@nestjs/common';
import {AuthService} from '../domain/auth.service';
import {Request} from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    @HttpCode(200)
    async login(@Req() request: Request, @Body() userData: {login?: string, password?: string}) {
        if (!(userData.login && userData.password)) {
            throw new BadRequestException();
        }

        const user = await this.authService.authUser(userData.login, userData.password)
        if (!user) {
            throw new UnauthorizedException();
        }

        request.session.userId = user.id;
    }
}
