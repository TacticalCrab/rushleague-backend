import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Request} from 'express';
import {UserModel} from '../../../user/domain/model/user.model';

@Injectable()
export class AuthGuard implements CanActivate {

    async isAuth(userId: string) {
        const user = await UserModel.findOne({
            where: { id: userId }
        });

        return user !== null;
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req: Request = context.switchToHttp().getRequest();
        const userId = req.session.userId || null;

        if (!userId) {
            throw new UnauthorizedException();
        }

        return this.isAuth(userId);
    }
}