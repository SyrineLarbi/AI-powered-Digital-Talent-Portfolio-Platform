import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class HostJwtGuard implements CanActivate {
    canActivate(ctx: ExecutionContext): boolean;
}
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
